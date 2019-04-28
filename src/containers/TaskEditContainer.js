import {connect} from 'react-redux';
import TaskEdit from '../components/TaskEdit';
import {
  editTask,
  updateTask
} from '../store/actions';

function mapStateToProps(state) {
  return {
    task: state.default.task,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editTask(id) {
      dispatch(editTask(id));
    },
    updateTask(task) {
      dispatch(updateTask(task));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskEdit);
