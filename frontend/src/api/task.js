import axios from './axios';

export const getTasksRequest = () => axios.get('/tasks');

export const getTaskRequest = async (id) => axios.get(`/tasks/${id}`);

export const createTaskRequest = (task) => axios.post("/tasks", task);

export const updateTaskRequest = async (task) =>
    axios.put(`/tasks/${task._id}`, task);

export const deleteTaskRequest = async (id) => axios.delete(`/tasks/${id}`);

