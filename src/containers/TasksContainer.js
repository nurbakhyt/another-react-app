import {connect} from 'react-redux';
import TasksList from '../components/TaskList';
import {fetchTasks} from '../store/actions';

function mapStateToProps(state) {
  return {
    isLoading: state.default.isLoading,
    tasks: state.default.tasks,
    totalCount: state.default.totalCount,
    page: state.default.page
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTasks() {
      dispatch(fetchTasks());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
