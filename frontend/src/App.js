import { useState } from 'react';
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
        setTodos([...todos, text]);
    };

    const deleteTodoHandler = (index) => {
        setTodos(todos.filter((_, idx) => idx !== index));
    };

    return (
        <section className={styles.todoContainer}>
            <div className={styles.imageBackground}>
                <Header isSun={isSun} setIsSun={setIsSun} />
                <TodoForm addTodo={addTodoHandler} />
            </div>
            <div className={styles.background}>
                <div className={styles.todoWrapper}>
                    <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
                </div>
                {todos.length ? <ButtonClear /> : ''}
                {todos.length ? <Filter /> : ''}
                {todos.length ? <h2>Drag and drop to reorder list</h2> : ''}
            </div>
        </section>
    );
}

export default App;
