import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import TaskContainer from './containers/TasksContainer';
import TaskCreateContainer from './containers/TaskCreateContainer';
import TaskEdit from './components/TaskEdit';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="app-nav">
          <Link to="/" className="app-nav__item">Задачи</Link>
          <Link to="/create" className="app-nav__item">Создать</Link>
          <Link to="/edit/1" className="app-nav__item">Редактировать</Link>
        </nav>

        <Switch>
          <Route path="/" exact component={TaskContainer} />
          <Route path="/create" component={TaskCreateContainer} />
          <Route path="/edit/:id" component={TaskEdit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
