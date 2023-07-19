import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import ButtonContainer from './components/ButtonContainer/ButtonContainer';

import styles from './App.module.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [isSun, setIsSun] = useState(true);
    const [filter, setFilter] = useState('All');

    const baseURL = 'http://127.0.0.1:5000';

    const addTodoHandler = async (text) => {
        try {
            const newTodo = {
                text: text,
                isCompleted: false,
            };

            const response = await axios.post(`${baseURL}/todos`, newTodo);
            const savedTodo = response.data;
            setTodos([...todos, savedTodo]);
        } catch (err) {
            console.log('Error adding todo', err);
        }
    };

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get(`${baseURL}/todos`);
                const fetchedTodos = response.data;
                setTodos(fetchedTodos);
            } catch (err) {
                console.log('Error getting todo', err);
            }
        };

        fetchTodos();
    }, []);

    const deleteTodoHandler = async (_id) => {
        try {
            await axios.delete(`${baseURL}/todos/${_id}`);
            setTodos(todos.filter((todo) => todo._id !== _id));
        } catch (err) {
            console.log('Error deleting todo', err);
        }
    };

    const toggleTodoHandler = async (_id) => {
        try {
            const updatedTodo = todos.find((todo) => todo._id === _id);
            const updatedTodoData = {
                ...updatedTodo,
                isCompleted: !updatedTodo.isCompleted,
            };
            await axios.patch(`${baseURL}/todos/${_id}`, updatedTodoData);
            setTodos(
                todos.map((todo) =>
                    todo._id === _id
                        ? { ...todo, isCompleted: !todo.isCompleted }
                        : { ...todo }
                )
            );
        } catch (err) {
            console.log('Error updating todo', err);
        }
    };

    const deleteCompletedTodoHandler = async () => {
        try {
            await axios.post(`${baseURL}/todos/completed`);
            setTodos(todos.filter((todo) => !todo.isCompleted));
        } catch (err) {
            console.log('Error deleting completed todos', err);
        }
    };

    const filterTodoHandler = (filter) => {
        setFilter(filter);
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'All') {
            return true;
        } else if (filter === 'Active') {
            return !todo.isCompleted;
        } else if (filter === 'Completed') {
            return todo.isCompleted;
        }
        return false;
    });

    return (
        <section className={styles.todoContainer}>
            <div
                className={
                    isSun
                        ? styles.imageBackground
                        : `${styles.imageBackground} darkTheme`
                }
            >
                <Header isSun={isSun} setIsSun={setIsSun} />
                <TodoForm addTodo={addTodoHandler} isSun={isSun} />
            </div>

            <div
                className={
                    isSun ? styles.background : `${styles.background} darkTheme`
                }
            >
                <TodoList
                    todos={filteredTodos}
                    setTodos={setTodos}
                    filter={filter}
                    deleteTodo={deleteTodoHandler}
                    toggleTodo={toggleTodoHandler}
                    isSun={isSun}
                />

                {!!todos.length && (
                    <ButtonContainer
                        isSun={isSun}
                        todos={todos}
                        deleteCompletedTodos={deleteCompletedTodoHandler}
                        filterTodo={filterTodoHandler}
                    />
                )}
            </div>
        </section>
    );
}

export default App;
