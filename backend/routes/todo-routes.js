import express from 'express';
import {
    getTodos,
    getTodo,
    deleteTodo,
    deleteCompletedTodos,
    addTodo,
    updateTodo,
} from '../controllers/todo-controller.js';

const router = express.Router();

router.get('/todos', getTodos);

router.get('/todos/:id', getTodo);

router.delete('/todos/:id', deleteTodo);

router.post('/todos/completed', deleteCompletedTodos);

router.post('/todos', addTodo);

router.patch('/todos/:id', updateTodo);

export default router;
