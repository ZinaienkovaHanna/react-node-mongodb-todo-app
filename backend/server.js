import express from 'express';
import mongoose from 'mongoose';
import Todo from './models/todo.js';
import todoRoutes from './routes/todo-routes.js';

const PORT = 5000;
const URL = 'mongodb://0.0.0.0:27017/todo-app';

const app = express();
app.use(express.json());
app.use(todoRoutes);

mongoose
    .connect(URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});
