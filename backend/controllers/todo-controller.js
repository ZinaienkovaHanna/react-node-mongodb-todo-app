import Todo from '../models/todo.js';

const handleError = (res, error) => {
    res.status(500).json({ error });
};

const getTodos = (req, res) => {
    Todo.find()
        .then((todos) => {
            res.status(200).json(todos);
        })
        .catch((err) => handleError(res, err));
};

const getTodo = (req, res) => {
    Todo.findById(req.params.id)
        .then((todo) => {
            res.status(200).json(todo);
        })
        .catch((err) => handleError(res, err));
};

const deleteTodo = (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => handleError(res, err));
};

const addTodo = (req, res) => {
    const todo = new Todo(req.body);

    todo.save()
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((err) => handleError(res, err));
};

const updateTodo = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => handleError(res, err));
};

export { getTodos, getTodo, deleteTodo, addTodo, updateTodo };
