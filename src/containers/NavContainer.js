import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../store/actions';

class Nav extends React.Component {

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const {user} = this.props;

    return (
      <nav className="app-nav">
        <Link to="/" className="app-nav__item">Задачи</Link>
        <Link to="/create" className="app-nav__item">Создать</Link>
        {user.authenticated
          ? <Link to="/login" className="app-nav__item">{user.username}</Link>
          : <Link to="/login" className="app-nav__item">Вход</Link>
        }
        {user.authenticated
          ? <a
            className="app-nav__item"
            onClick={this.logout.bind(this)}
          >Выход</a>
          : ''
        }
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.default.user };
}

function mapDispatchToProps(dispatch) {
  return {
    logout() {
      dispatch(logout());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);