import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import streamShow from "./streams/streamShow";
import streamDelete from "./streams/streamDelete";
import streamList from "./streams/streamList";
import StreamCreate from "./streams/streamCreate";
import streamEdit from "./streams/streamEdit";
import Header from "./header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <div>
          <Switch>
            <Route path="/" exact component={streamList} />
            <Route path="/streams/create" exact component={StreamCreate} />
            <Route path="/streams/:id" exact component={streamShow} />
            <Route path="/streams/edit/:id" exact component={streamEdit} />
            <Route path="/streams/delete/:id" exact component={streamDelete} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
