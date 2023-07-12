import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import ButtonContainer from './components/ButtonContainer/ButtonContainer';

import styles from './App.module.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [isSun, setIsSun] = useState(true);
    const [filter, setFilter] = useState('All');

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

    const deleteCompletedTodoHandler = () => {
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
                <div className={styles.todoWrapper}>
                    <TodoList
                        todos={filteredTodos}
                        setTodos={setTodos}
                        filter={filter}
                        deleteTodo={deleteTodoHandler}
                        toggleTodo={toggleTodoHandler}
                        isSun={isSun}
                    />
                </div>

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
