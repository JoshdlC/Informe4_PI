import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest  } from "../api/task";
import { useAuth } from "./AuthContext";

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error('useTasks must be used within a TaskProvider');
    }

    return context;
}

export function TaskProvider({children}){

    const [tasks, setTasks] = useState([]);
    const {user} = useAuth();

    const getTasks = async () => {
        try {
            const res = await getTasksRequest();
            setTasks(res.data);    
        } catch (error){
            console.log(error)
        }
        
    }

    const createTask = async (taskData) => {
        
        console.log('agregando publicacion');
        const task = {
            ...taskData,
            usuario: user._id
        };

        const res = await createTaskRequest(task);
        console.log('Publicacion creada');
        console.log(res);

        if (res.status === 201) {
            setTasks(prevTasks => [...prevTasks, res.data]);
        }
    };

    const deleteTask = async (id) => {
        try {
            const res = await deleteTaskRequest(id);
            if (res.status === 204) setTasks(tasks.filter(task => task._id !== id));
        } catch (error) {
            console.log(error)
        }
    };

    const getTask = async (id) => {
        try {
            const res = await getTaskRequest(id);
            console.log(res);
 
            return res.data;
        } catch (error) {
            console.log(error)    
        }
        
    };

    const updateTask = async (id, task) => {
        try {
            await updateTaskRequest(id, task);    
        } catch (error) {
            console.log(error);
        }
        
    }

    const filtrarTasks = (curso) => {
        
    }
    return (
        <TaskContext.Provider 
        value={{
            tasks,
            createTask,
            deleteTask,
            getTasks,
            getTask,
            updateTask
        }}>
            {children}
        </TaskContext.Provider>
    );
}