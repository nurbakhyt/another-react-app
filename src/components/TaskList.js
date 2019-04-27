import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {
  render () {
    return (
      <main>
        <h2>Список задач</h2>
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </main>
    )
  }
}

export default TaskList;