import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
