import React from 'react';
import Paginator from './Paginator';
import './pagination.css';
import TaskItem from './TaskItem';

class TaskList extends React.Component {

  componentDidMount() {
    this.props.fetchTasks();
  }

  goToPage(page) {
    if (this.props.page !== page) {
      this.props.goToPage(page);
    }
  }

  render() {
    const {
      isLoading,
      tasks,
      totalCount,
      perPage,
      page,
    } = this.props;
    const pagesCount = Math.ceil(totalCount / perPage);
    let pages = new Array(pagesCount).fill(1);

    return (
      <main>
        <h2>
          Список задач
          <small>
            ({page}/{pagesCount}) {isLoading && 'Загрузка...'}
          </small>
        </h2>

        {tasks.map(task => <TaskItem key={task.id.toString()} task={task}/>)}

        <Paginator
          page={page}
          pages={pages}
          goToPage={this.goToPage.bind(this)}
        />

      </main>
    )
  }
}

export default TaskList;