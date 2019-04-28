import React from 'react';
import './form.css';

class TaskCreate extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const {username, email, text} = e.target;

    let form = new FormData();
    form.append('username', username.value);
    form.append('email', email.value);
    form.append('text', text.value);

    this.props.createTask(form);

    username.value = '';
    email.value = '';
    text.value = '';
  }

  render () {
    const {isLoading} = this.props;

    return (
      <main>
        <h2>Создание задачи <small>{isLoading && 'Отправка...'}</small></h2>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Ваше имя" />
          <input
            type="email"
            name="email"
            placeholder="Ваш email" />
          <textarea
            name="text"
            rows="4"
            placeholder="Ваша задача" />
          <button type="submit">Сохранить</button>
        </form>
      </main>
    )
  }
}

export default TaskCreate;