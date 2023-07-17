import express from 'express';
import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';
import Todo from './models/todo.js';

const PORT = 5000;
const URL = 'mongodb://0.0.0.0:27017/todo-app';

const app = express();
app.use(express.json());

mongoose
    .connect(URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});

let db;

const handleError = (res, error) => {
    res.status(500).json({ error });
};

app.get('/todos', (req, res) => {
    Todo.find()
        .then((todos) => {
            res.status(200).json(todos);
        })
        .catch(() => handleError(res, 'Something goes wrong...'));
});

app.get('/todos/:id', (req, res) => {
    Todo.findById(req.params.id)
        .then((todo) => {
            res.status(200).json(todo);
        })
        .catch(() => handleError(res, 'Something goes wrong...'));
});

app.delete('/todos/:id', (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch(() => handleError(res, 'Something goes wrong...'));
});

app.post('/todos', (req, res) => {
    const todo = new Todo(req.body);

    todo.save()
        .then((result) => {
            res.status(201).json(result);
        })
        .catch(() => handleError(res, 'Something goes wrong...'));
});

app.patch('/todos/:id', (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch(() => handleError(res, 'Something goes wrong...'));
});
