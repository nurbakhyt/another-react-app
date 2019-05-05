import React from 'react';
import {Link} from 'react-router-dom';
import './task.css';

class TaskItem extends React.Component {
  render () {
    const {
      id,
      username,
      email,
      text,
      status
    } = this.props.task;

    const {canEdit} = this.props;

    return (
      <article className="task">
        <div className="task__author">
          {username} ({email})
        </div>
        <div className="task__body">
          #{id} / {text}
        </div>
        <div className="task__status">
          {status}
        </div>
        {canEdit
          ? <Link
            to={`/edit/${id}`}
            className="task__edit"
          >
            Изменить
          </Link>
          : ''
        }

      </article>
    )
  }
}

export default TaskItem;