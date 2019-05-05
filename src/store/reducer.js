import {
  TASKS_REQUEST,
  TASKS_RECEIVE,
  TASK_CREATED,
  TASK_GET,
  SET_PAGE,
  SET_SORT_FIELD,
  SET_SORT_DIRECTION,
  AUTH_PROCESSING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_ACTION,
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
  },
  user: {
    authenticated: false,
    failed: false,
    username: ''
  }
};

export default function tasks(state = initialState, action = {}) {
  switch (action.type) {
    case TASKS_REQUEST:
    case AUTH_PROCESSING:
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
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: {
          authenticated: true,
          failed: false,
          username: action.username
        }
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        user: {
          authenticated: false,
          failed: true,
          username: ''
        }
      };
    case LOGOUT_ACTION:
      return {
        ...state,
        isLoading: false,
        user: initialState.user
      };
    default:
      return state;
  }
};
