import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import TaskContainer from './containers/TasksContainer';
import TaskCreateContainer from './containers/TaskCreateContainer';
import TaskEditContainer from './containers/TaskEditContainer';
import LoginContainer from './containers/LoginContainer';
import Nav from './containers/NavContainer';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />

        <Switch>
          <Route path="/" exact component={TaskContainer} />
          <Route path="/create" component={TaskCreateContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/edit/:id" component={TaskEditContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
