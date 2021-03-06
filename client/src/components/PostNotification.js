import React, { useRef, useEffect, useState } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { Form, Button } from "react-bootstrap";
import API from "../utils/API";
import { SET_USERS, SET_NOTIFICATIONS } from "../utils/actions";

export default function PostNotification() {
  const [state, dispatch] = useStoreContext();
  const postRef = useRef();
  const receiverRef = useRef();
  const [receiverId, setReceiverId] = useState({});
  const [formObject, setFormObject] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  let receiveId = "";
  useEffect(() => {
    getAllUsers(state.currentproperty);
    getNotifications(state.currentproperty);
  }, []);

  function createPost(event) {
    event.preventDefault();
    API.createNotification({
      message: postRef.current.value,
      SenderId: state.currentUser.id,
      ReceiverId: receiveId,
      PropertyId: state.currentproperty,
    })
      .then((res) => {
        console.log(res.data);
        getNotifications(state.currentproperty);
        confirmSent();
        const form = document.getElementById("myForm");
        form.reset();
      })
      .catch((err) => console.log(err));
  }
  function getNotifications(currentproperty) {
    API.getNotifications(currentproperty)
      .then((response) => {
        console.log(response);
        dispatch({ type: SET_NOTIFICATIONS, notifications: response.data });
      })
      .catch((err) => console.log(err));
  }
  function getAllUsers(currentproperty) {
    API.getAllUsers(currentproperty)
      .then((response) => {
        console.log(response);
        dispatch({ type: SET_USERS, users: response.data });
      })

      .catch((err) => console.log(err));
  }

  function getId() {
    if (receiverRef.current.value !== "Choose Apt...") {
      API.findIdByApt({
        id: receiverRef.current.value,
        PropertyId: state.currentproperty,
      }).then((response) => {
        console.log(response.data);
        receiveId = response.data.id;
        console.log(response.data.id);
      });
    }
  }
  function confirmSent() {
    setSuccessMessage("Notification Sent");
    setTimeout(() => {
      document.getElementById("success-message").style.display = "none";
    }, 1000);
  }
  return (
    <div className="post-messages--container">
      <h2>Post Notification Here</h2>
      <Form className="post-messages--form" id="myForm">
        <Form.Group controlId="notication-form">
          <Form.Label>To</Form.Label>

          <Form.Control
            as="select"
            defaultValue="Choose..."
            ref={receiverRef}
            onChange={getId}
          >
            <option>Choose Apt...</option>
            {state.users.length
              ? state.users.map((user) => (
                  <option key={user.id}>{user.aptNumber}</option>
                ))
              : ""}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="notification-apt-form">
          <Form.Control as="textarea" rows="5" ref={postRef} />
        </Form.Group>
        <Button className="button" type="submit" onClick={createPost}>
          Send
        </Button>
        <span className="post-messages--success" id="success-message">
          {successMessage}
        </span>
      </Form>
    </div>
  );
}
