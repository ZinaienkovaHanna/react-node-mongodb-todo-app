import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import ButtonContainer from './components/ButtonContainer/ButtonContainer';
import {
    getTodos,
    addTodo,
    deleteTodo,
    updatedTodo,
    deleteCompletedTodo,
} from './services/todoService';

import styles from './App.module.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [isSun, setIsSun] = useState(true);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const fetchTodos = async () => {
            const fetchedTodos = await getTodos();
            setTodos(fetchedTodos);
        };

        fetchTodos();
    }, []);

    const addTodoHandler = async (text) => {
        const savedTodo = await addTodo(text);
        setTodos([...todos, savedTodo]);
    };

    const deleteTodoHandler = async (_id) => {
        const todos = await deleteTodo(_id);
        setTodos(todos.filter((todo) => todo._id !== _id));
    };

    const toggleTodoHandler = async (_id) => {
        const updateTodo = todos.find((todo) => todo._id === _id);
        const updatedTodoData = {
            isCompleted: !updateTodo.isCompleted,
        };
        console.log(updatedTodoData);
        await updatedTodo(_id, updatedTodoData);
        setTodos(
            todos.map((todo) =>
                todo._id === _id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : { ...todo }
            )
        );
    };

    const deleteCompletedTodoHandler = async () => {
        await deleteCompletedTodo();
        setTodos(todos.filter((todo) => !todo.isCompleted));
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
