import {
  TASKS_REQUEST,
  TASKS_RECEIVE
} from './actions'

const initialState = {
  isLoading: false,
  tasks: [],
  totalCount: 0,
  page: 1
};

export default function tasks(state = initialState, action = {}) {
  switch (action.type) {
    case TASKS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case TASKS_RECEIVE:
      return {
        ...state,
        tasks: action.data.tasks,
        totalCount: action.data.total_task_count,
        isLoading: false
      };
    default:
      return state;
  }
};
