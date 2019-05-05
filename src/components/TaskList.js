import React from 'react';
import Paginator from './pagination/Paginator';
import TaskItem from './TaskItem';
import SortingBar from './sorting/SortingBar';

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
      navParams,
      changeSortField,
      changeSortDirection,
      user
    } = this.props;
    const pagesCount = Math.ceil(totalCount / perPage);
    let pages = new Array(pagesCount).fill(1);

    return (
      <main>
        <h2>
          Список задач
          <small>
            ({navParams.page}/{pagesCount}) {isLoading && 'Загрузка...'}
          </small>
        </h2>

        <SortingBar
          navParams={navParams}
          changeSortField={changeSortField}
          changeSortDirection={changeSortDirection}
        />

        {tasks.map(task => <TaskItem
          key={task.id.toString()}
          task={task}
          canEdit={user.authenticated}/>)
        }

        <Paginator
          navParams={navParams}
          pages={pages}
          goToPage={this.goToPage.bind(this)}
        />

      </main>
    )
  }
}

export default TaskList;