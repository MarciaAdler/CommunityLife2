import React, { useEffect } from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import { SET_SENT_MESSAGES } from "../utils/actions";
import dateFormat from "dateformat";

export default function Sent() {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    if (state.currentUser.id !== 0) {
      getSentMessages(state.currentUser);
    } else {
      getSentMessages(JSON.parse(localStorage.getItem("currentUser")));
    }
  }, []);
  function getSentMessages(currentUser) {
    API.getSentMessages(currentUser.id)
      .then((response) => {
        dispatch({ type: SET_SENT_MESSAGES, sentmessages: response.data });
      })
      .catch((err) => console.log(err));
  }
  function hideMessage(message) {
    API.hideMessage(message)
      .then((res) => {
        getSentMessages(state.currentUser);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="list-group">
      <Accordion>
        {state.sentmessages.length > 0
          ? state.sentmessages.map((message) => {
              return (
                <Card key={message.id}>
                  <Card.Header>
                    <Accordion.Toggle
                      className="accordion"
                      as={Button}
                      variant="link"
                      eventKey={message.id}
                    >
                      Subject: {message.subject}
                      <br />
                      To: {message.Receiver.firstName}{" "}
                      {message.Receiver.lastName}
                      <br></br>
                      <span className="view-bulletin--date">
                        <small>
                          {dateFormat(
                            `${message.createdAt}`,
                            "dddd, mmmm, dS, yyyy, h:MM TT"
                          )}{" "}
                          {"EST"}
                        </small>
                      </span>
                    </Accordion.Toggle>
                    <button
                      className="view-messages--delete-btn"
                      onClick={() => {
                        hideMessage(message.id);
                      }}
                    >
                      X
                    </button>
                  </Card.Header>
                  <Accordion.Collapse eventKey={message.id}>
                    <Card.Body>{message.message}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              );
            })
          : "no sent messages"}
      </Accordion>
    </div>
  );
}
