import axios from './axios';

export const getTasksRequest = () => axios.get('/tasks');

export const getTaskRequest = (_id) => axios.get(`/tasks/${_id}`);

export const createTaskRequest = (task) => axios.post("/tasks", task);

export const updateTaskRequest = async (task) =>
    axios.put(`/tasks/${task._id}`, task);

export const deleteTaskRequest = async (_id) => axios.delete(`/tasks/${_id}`);

