import {connect} from 'react-redux';
import TasksList from '../components/TaskList';
import {
  fetchTasks,
  goToPage
} from '../store/actions';

function mapStateToProps(state) {
  return {
    isLoading: state.default.isLoading,
    tasks: state.default.tasks,
    totalCount: state.default.totalCount,
    perPage: state.default.perPage,
    page: state.default.page
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTasks(params) {
      dispatch(fetchTasks(params));
    },
    goToPage(page) {
      dispatch(goToPage(page));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
