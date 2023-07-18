import express from 'express';
import mongoose from 'mongoose';
import todoRoutes from './routes/todo-routes.js';
import { config } from 'dotenv';

config();

const PORT = 5000;
const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.2uhcfpa.mongodb.net/todo-app?retryWrites=true&w=majority`;

console.log(URL);

const app = express();
app.use(express.json());
app.use(todoRoutes);

mongoose
    .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});
