import axios from 'axios';
import md5 from 'js-md5';

const API_URL = 'https://uxcandy.com/~shapoval/test-task-backend/';
const DEV_NAME = 'Nurbakhyt';

export const TASKS_REQUEST = 'TASKS_REQUEST';
export const TASKS_RECEIVE = 'TASKS_RECEIVE';
export const TASK_CREATED = 'TASK_CREATED';
export const TASK_GET = 'TASK_GET';
export const SET_PAGE = 'SET_PAGE';
export const SET_SORT_FIELD = 'SET_SORT_FIELD';
export const SET_SORT_DIRECTION = 'SET_SORT_DIRECTION';

const requestTasks = () => ({
  type: TASKS_REQUEST
});

const receiveTasks = data => ({
  type: TASKS_RECEIVE,
  data
});

const createdTask = data => ({
  type: TASK_CREATED,
  data
});

const getTask = id => ({
  type: TASK_GET,
  id
});

const setPage = page => ({
  type: SET_PAGE,
  page
});

const setSortField = field => ({
  type: SET_SORT_FIELD,
  field
});

const setSortDirection = direct => ({
  type: SET_SORT_DIRECTION,
  direct
});

export const fetchTasks = (navParams = {}) => async(dispatch) => {
  dispatch(requestTasks());
  try {
    const {
      page,
      sortField,
      sortDirection
    } = navParams;

    let url = `${API_URL}?developer=${DEV_NAME}`;

    if (!!page) {
      url = url + `&page=${page}`;
    }
    if (!!sortField) {
      url = url + `&sort_field=${sortField}`
    }
    if (!!sortDirection) {
      url = url + `&sort_direction=${sortDirection}`
    }
    const response = await axios.get(url);

    if (response.data.status === 'ok') {
      dispatch(receiveTasks(response.data.message));
    }
  } catch (error) {
    console.error('fetchTasks', error);
  }
};

export const goToPage = navParams => async(dispatch) => {
  dispatch(await fetchTasks(navParams));
  dispatch(setPage(navParams.page));
};

export const changeSortField = navParams => async(dispatch) => {
  dispatch(await fetchTasks(navParams));
  dispatch(setSortField(navParams.sortField));
};

export const changeSortDirection = navParams => async(dispatch) => {
  dispatch(await fetchTasks(navParams));
  dispatch(setSortDirection(navParams.sortDirection));
};

export const createTask = task => async(dispatch) => {
  dispatch(requestTasks());
  try {
    const response = await axios.post(`${API_URL}create/?developer=${DEV_NAME}`, task);

    if (response.data.status === 'ok') {
      dispatch(createdTask(response.data.message));
    }
  } catch (error) {
    console.error('createTask', error);
  }
};

export const editTask = id => dispatch => {
  dispatch(getTask(id));
};

export const updateTask = ({id, queryString}) => async(dispatch) => {
  dispatch(requestTasks());
  try {
    queryString = `developer=${DEV_NAME}&` + queryString + `&token=beejee`;
    const url = `${API_URL}edit/${id}/?` + queryString;

    const formData = new FormData();
    formData.append('signature', md5(queryString));

    const response = await axios.post(url, formData);

    console.log('response', response);
  } catch(error) {
    console.error('updateTask', error);
  }
};
