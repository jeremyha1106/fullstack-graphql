import React from "react";
import "../styles/App.css";
import LinkList from "./LinkList";
import { CreateLink } from "./CreateLink";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Login } from "./Login";

function App() {
  return (
    <Router>
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/">
            <LinkList />
          </Route>
          <Route exact path="/create">
            <CreateLink />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
