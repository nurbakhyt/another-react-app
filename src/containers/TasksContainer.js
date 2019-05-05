import {connect} from 'react-redux';
import TasksList from '../components/TaskList';
import {
  fetchTasks,
  goToPage,
  changeSortField,
  changeSortDirection
} from '../store/actions';

function mapStateToProps(state) {
  const {
    isLoading,
    tasks,
    totalCount,
    perPage,
    navParams,
    user
  } = state.default;

  return {
    isLoading,
    tasks,
    totalCount,
    perPage,
    navParams,
    user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTasks(params) {
      dispatch(fetchTasks(params));
    },
    goToPage(page) {
      dispatch(goToPage(page));
    },
    changeSortField(field) {
      dispatch(changeSortField(field));
    },
    changeSortDirection(field) {
      dispatch(changeSortDirection(field));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
