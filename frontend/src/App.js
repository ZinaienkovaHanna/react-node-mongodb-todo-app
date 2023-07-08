import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/UI/Header';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import ButtonClear from './components/UI/ButtonClear';
import Filter from './components/UI/Filter';

import styles from './App.module.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [isSun, setIsSun] = useState(true);

    const addTodoHandler = (text) => {
        const newTodo = {
            text: text,
            isCompleted: false,
            id: uuidv4(),
        };
        setTodos([...todos, newTodo]);
    };

    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodoHandler = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : { ...todo }
            )
        );
    };

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
                <div className={styles.todoWrapper}>
                    <TodoList
                        todos={todos}
                        deleteTodo={deleteTodoHandler}
                        toggleTodo={toggleTodoHandler}
                        isSun={isSun}
                    />
                </div>
                {todos.length ? (
                    <ButtonClear isSun={isSun} todos={todos} />
                ) : (
                    ''
                )}
                {todos.length ? <Filter isSun={isSun} /> : ''}
                {todos.length ? <h2>Drag and drop to reorder list</h2> : ''}
            </div>
        </section>
    );
}

export default App;
