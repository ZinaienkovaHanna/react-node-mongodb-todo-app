import Todo from './Todo';

import React from 'react';

function TodoList({ todos, deleteTodo, isSun, toggleTodo }) {
    return (
        <>
            {!todos.length && <h2>Todo list is empty</h2>}
            {todos.map((todo, index) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                    isFirstTodo={index === 0}
                    isSun={isSun}
                />
            ))}
        </>
    );
}

export default TodoList;
