import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {

  componentDidMount() {
    this.props.fetchTasks();
  }

  render () {
    const {isLoading, tasks, totalCount} = this.props;

    return (
      <main>
        <h2>Список задач <small>({totalCount})</small></h2>
        {isLoading && <p>Загрузка...</p>}
        {tasks.map(task => <TaskItem key={task.id} task={task} />)}
        <TaskItem />
        <TaskItem />
      </main>
    )
  }
}

export default TaskList;