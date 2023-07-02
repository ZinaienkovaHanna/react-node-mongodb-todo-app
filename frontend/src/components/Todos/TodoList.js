import Todo from './Todo';

import React from 'react';

function TodoList({ todos, deleteTodo }) {
    return (
        <>
            {!todos.length && <h2>Todo list is empty</h2>}
            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    todo={todo}
                    index={index}
                    deleteTodo={deleteTodo}
                    isFirstTodo={index === 0}
                />
            ))}
        </>
    );
}

export default TodoList;
