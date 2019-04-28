import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import TaskContainer from './containers/TasksContainer';
import TaskCreateContainer from './containers/TaskCreateContainer';
import TaskEditContainer from './containers/TaskEditContainer';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="app-nav">
          <Link to="/" className="app-nav__item">Задачи</Link>
          <Link to="/create" className="app-nav__item">Создать</Link>
        </nav>

        <Switch>
          <Route path="/" exact component={TaskContainer} />
          <Route path="/create" component={TaskCreateContainer} />
          <Route path="/edit/:id" component={TaskEditContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
