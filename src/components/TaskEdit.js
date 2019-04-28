import React from 'react';
import {Link} from 'react-router-dom';
import QueryBuilder from '../utils/queryBuilder';

class TaskEdit extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      status: 0
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
  }

  componentDidMount() {
    const {editTask, match} = this.props;
    editTask(Number(match.params.id));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {task} = this.props;
    if (prevProps.task === null) {
      this.setState({
        text: task.text,
        status: task.status
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    let qs = new QueryBuilder();
    qs.add('status', this.state.status)
      .add('text', this.state.text);
    let queryString = qs.build();

    this.props.updateTask({
      id: this.props.task.id,
      queryString
    });
  }

  handleText(e) {
    this.setState({text: e.target.value});
  }

  handleStatus(e) {
    this.setState({status: e.target.value});
  }

  render() {
    const {task} = this.props;

    return (
      <main>
        <h2>Редактирование задачи</h2>
        {task
          ? <form onSubmit={this.onSubmit}>
            <label>{task.username}</label>
            <label>{task.email}</label>
            <input
              type="hidden"
              name="token"
              value="beejee" />
            <textarea
              name="text"
              rows="4"
              value={this.state.text}
              onChange={this.handleText}
              placeholder="Ваша задача" />
            <input
              type="range"
              name="status"
              min="0"
              max="10"
              value={this.state.status}
              onChange={this.handleStatus} />
            <button type="submit">Сохранить</button>
          </form>
          : <Link to="/">Выберите задание для редактирования</Link>}
      </main>
    )
  }
}

export default TaskEdit;