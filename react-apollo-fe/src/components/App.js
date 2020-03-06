import React from "react";
import "../styles/App.css";
import LinkList from "./LinkList";
import { CreateLink } from "./CreateLink";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./Header";
import { Login } from "./Login";
import { Search } from "./Search";

function App() {
  return (
    <Router>
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/">
            {() => <Redirect to="/new/1" />}
          </Route>
          <Route exact path="/create">
            <CreateLink />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/top">
            <LinkList />
          </Route>
          <Route exact path="/new/:page">
            <LinkList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
