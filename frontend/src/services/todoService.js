import axios from 'axios';

const baseURL = 'http://127.0.0.1:5000';

const getTodos = async () => {
    try {
        const response = await axios.get(`${baseURL}/todos`);
        return response.data;
    } catch (error) {
        throw new Error('Error getting todos');
    }
};

const addTodo = async (text) => {
    try {
        const newTodo = {
            text: text,
            isCompleted: false,
        };

        const response = await axios.post(`${baseURL}/todos`, newTodo);
        return response.data;
    } catch (error) {
        throw new Error('Error adding todo');
    }
};

const deleteTodo = async (_id) => {
    try {
        const response = await axios.delete(`${baseURL}/todos/${_id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error deleting todo');
    }
};

const updatedTodo = async (_id, updatedTodoData) => {
    try {
        const response = await axios.patch(
            `${baseURL}/todos/${_id}`,
            updatedTodoData
        );
        return response.data;
    } catch (error) {
        throw new Error('Error updating todo');
    }
};

const deleteCompletedTodo = async () => {
    try {
        const response = await axios.post(`${baseURL}/todos/completed`);
        return response.data;
    } catch (error) {
        throw new Error('Error deleting completed todos');
    }
};

export { getTodos, addTodo, deleteTodo, updatedTodo, deleteCompletedTodo };
