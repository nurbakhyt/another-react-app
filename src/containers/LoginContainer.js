import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {login} from '../store/actions';

class LoginPage extends React.Component {

  onSubmit(e) {
    e.preventDefault();
    const {username, password} = e.target;

    this.props.login({
      username: username.value,
      password: password.value
    });

    username.value = '';
    password.value = '';
  }

  render() {
    const {user, isLoading} = this.props;

    return (
      <main>
        <h2>Вход{isLoading ? '...' : ''}</h2>
        {user.authenticated
          ? <p>Вы вошли как {user.username}. <Link to="/">Перейти к задачам</Link></p>
          : <form onSubmit={this.onSubmit.bind(this)}>
            {user.failed && !isLoading && <p style={{color: 'red'}}>Неправильный логин или пароль</p>}
            <input
              type="text"
              name="username"
              placeholder="Ваше имя"/>
            <input
              type="password"
              name="password"
              placeholder="Ваш пароль"/>
            <button type="submit">Login</button>
          </form>
        }
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.default.isLoading,
    user: state.default.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login(credentials) {
      dispatch(login(credentials));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
