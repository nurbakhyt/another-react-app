import axios from 'axios';

const API_URL = 'https://uxcandy.com/~shapoval/test-task-backend/';

export const TASKS_REQUEST = 'TASKS_REQUEST';
export const TASKS_RECEIVE = 'TASKS_RECEIVE';
export const TASK_CREATED = 'TASK_CREATED';

export const requestTasks = () => ({
  type: TASKS_REQUEST
});

export const receiveTasks = data => ({
  type: TASKS_RECEIVE,
  data
});

export const createdTask = data => ({
  type: TASK_CREATED,
  data
});

export const fetchTasks = () => async(dispatch) => {
  dispatch(requestTasks());
  try {
    const response = await axios.get(`${API_URL}?developer=Nurbakhyt`);

    if (response.data.status === 'ok') {
      dispatch(receiveTasks(response.data.message));
    }
  } catch (error) {
    console.error(error);
  }
};

export const createTask = task => async(dispatch) => {
  dispatch(requestTasks());
  try {
    const response = await axios.post(`${API_URL}create/?developer=Nurbakhyt`, task);

    if (response.data.status === 'ok') {
      dispatch(createdTask(response.data.message));
    }
  } catch (error) {
    console.error(error);
  }
};
