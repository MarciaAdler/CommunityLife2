import React from "react";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import SideNav from "../src/components/SideNav";
import Announcements from "./Pages/Announcements";
import BulletinBoard from "./Pages/BulletinBoard";
import Notifications from "./Pages/Notifications";
import Messages from "./Pages/Messages";
import Footer from "../src/components/Footer";
import { Col } from "react-bootstrap";
import { StoreProvider } from "../src/utils/GlobalState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.sass";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>
          <Header />

          <SideNav />

          <Switch>
            <Route exact path="/" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/home" component={Home} />
            <Route path="/announcements" component={Announcements} />
            <Route path="/bulletinboard" component={BulletinBoard} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/messages" component={Messages} />
          </Switch>
        </Router>
      </StoreProvider>
      <Footer />
    </div>
  );
}

export default App;
