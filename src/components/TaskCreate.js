import React from 'react';
import './form.css';

class TaskCreate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      author: '',
      task: '',
      email: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.changeAuthor = this.changeAuthor.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeTask = this.changeTask.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('handleSubmit');
  }

  changeAuthor(e) {
    this.setState({
      author: e.target.value
    })
  }

  changeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  changeTask(e) {
    this.setState({
      task: e.target.value
    })
  }

  render () {
    return (
      <main>
        <h2>Создание задачи</h2>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.author}
            placeholder="Ваше имя"
            onChange={this.changeAuthor} />
          <input
            type="email"
            value={this.state.email}
            placeholder="Ваш email"
            onChange={this.changeEmail} />
          <textarea
            value={this.state.task}
            rows="4"
            placeholder="Ваша задача"
            onChange={this.changeTask} />
          <button type="submit">Сохранить</button>
        </form>
      </main>
    )
  }
}

export default TaskCreate;