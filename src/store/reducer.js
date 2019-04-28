import {
  TASKS_REQUEST,
  TASKS_RECEIVE,
  TASK_CREATED,
  TASK_GET,
  SET_PAGE,
  SET_SORT_FIELD,
  SET_SORT_DIRECTION
} from './actions'

const initialState = {
  isLoading: false,
  tasks: [],
  task: null,
  totalCount: 0,
  perPage: 3,
  navParams: {
    page: 1,
    sortField: null,
    sortDirection: null
  }
};

export default function tasks(state = initialState, action = {}) {
  switch (action.type) {
    case TASKS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case SET_PAGE:
      return {
        ...state,
        navParams: {
          ...state.navParams,
          page: action.page
        }
      };
    case SET_SORT_FIELD:
      return {
        ...state,
        navParams: {
          ...state.navParams,
          sortField: action.field
        }
      };
    case SET_SORT_DIRECTION:
      return {
        ...state,
        navParams: {
          ...state.navParams,
          sortDirection: action.direct
        }
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
        isLoading: false,
        tasks: [
          ...state.tasks,
          action.data
        ]
      };
    case TASK_GET:
      let task = state.tasks.find(task => task.id === action.id) || null;

      return {
        ...state,
        task
      };
    default:
      return state;
  }
};
