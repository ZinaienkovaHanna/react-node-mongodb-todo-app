import Todo from '../Todo/Todo';

import React from 'react';

function TodoList({ todos, deleteTodo, isSun, toggleTodo, filter }) {
    let message = '';

    if (filter === 'All' && todos.length === 0) {
        message = 'Todo list is empty';
    } else if (filter === 'Active' && todos.every((todo) => todo.isCompleted)) {
        message = 'No active todo';
    } else if (
        filter === 'Completed' &&
        todos.every((todo) => !todo.isCompleted)
    ) {
        message = 'No completed todo';
    }

    return (
        <>
            {message ? (
                <h2>{message}</h2>
            ) : (
                todos.map((todo, index) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                        isFirstTodo={index === 0}
                        isSun={isSun}
                    />
                ))
            )}
        </>
    );
}

export default TodoList;
