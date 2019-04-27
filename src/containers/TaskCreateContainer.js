import { connect } from 'react-redux';
import TaskCreate from '../components/TaskCreate';
import {createTask} from '../store/actions';

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
    createTask(task) {
      dispatch(createTask(task));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreate);
