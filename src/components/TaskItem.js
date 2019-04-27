import React from 'react';
import {Link} from 'react-router-dom';
import './task.css';

class TaskItem extends React.Component {
  render () {
    return (
      <article className="task">
        <div className="task__author">Craig (craig@jons.com)</div>
        <div className="task__body">
          Задача
        </div>
        <Link to="/edit/2" className="task__edit">Изменить</Link>
      </article>
    )
  }
}

export default TaskItem;