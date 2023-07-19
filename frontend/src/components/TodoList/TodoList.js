import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Todo from '../Todo/Todo';

import styles from './TodoList.module.css';

function TodoList({ todos, setTodos, deleteTodo, isSun, toggleTodo, filter }) {
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

    function handleDragEnd(result) {
        if (!result.destination) {
            return;
        }

        const updatedTodos = Array.from(todos);
        const [removed] = updatedTodos.splice(result.source.index, 1);
        updatedTodos.splice(result.destination.index, 0, removed);

        setTodos(updatedTodos);
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="todoList">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {message ? (
                            <h2 className={styles.message}>{message}</h2>
                        ) : (
                            todos.map((todo, index) => (
                                <Draggable
                                    key={todo._id}
                                    draggableId={todo._id.toString()}
                                    index={index}
                                >
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Todo
                                                todo={todo}
                                                deleteTodo={deleteTodo}
                                                toggleTodo={toggleTodo}
                                                isFirstTodo={index === 0}
                                                isSun={isSun}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))
                        )}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default TodoList;
