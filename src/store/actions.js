import axios from 'axios';
import md5 from 'js-md5';

const API_URL = 'https://uxcandy.com/~shapoval/test-task-backend/';
const DEV_NAME = 'Nurbakhyt';

export const TASKS_REQUEST = 'TASKS_REQUEST';
export const TASKS_RECEIVE = 'TASKS_RECEIVE';
export const TASK_CREATED = 'TASK_CREATED';
export const TASK_GET = 'TASK_GET';
export const SET_PAGE = 'SET_PAGE';

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

export const fetchTasks = ({page}) => async(dispatch) => {
  dispatch(requestTasks());
  try {
    let url = `${API_URL}?developer=${DEV_NAME}`;
    if (page > 1) {
      url = url + `&page=${page}`;
    }
    const response = await axios.get(url);

    if (response.data.status === 'ok') {
      dispatch(receiveTasks(response.data.message));
    }
  } catch (error) {
    console.error('fetchTasks', error);
  }
};

export const goToPage = page => async(dispatch) => {
  dispatch(await fetchTasks({page}));
  dispatch(setPage(page));
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
