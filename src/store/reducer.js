import {
  TASKS_REQUEST,
  TASKS_RECEIVE,
  TASK_CREATED
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
        totalCount: Number(action.data.total_task_count),
        isLoading: false
      };
    case TASK_CREATED:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.data
        ]
      };
    default:
      return state;
  }
};
