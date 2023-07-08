import checkIcon from '../../images/icon-check.svg';
import crossIcon from '../../images/icon-cross.svg';

import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, isFirstTodo, isSun, toggleTodo }) {
    const todoClassName = `${styles.todoContainer} ${
        isFirstTodo ? styles.firstTodo : ''
    } ${isSun ? '' : 'darkTheme'} ${
        todo.isCompleted ? styles.completedTodo : ''
    }`;

    return (
        <div className={todoClassName}>
            <span className={styles.circle} onClick={() => toggleTodo(todo.id)}>
                {todo.isCompleted && (
                    <img
                        src={checkIcon}
                        alt="Check Icon"
                        className={styles.checkIconIcon}
                    ></img>
                )}
            </span>

            <h3>{todo.text}</h3>
            <img
                src={crossIcon}
                alt="Cross Icon"
                className={styles.crossIcon}
                onClick={() => deleteTodo(todo.id)}
            ></img>
        </div>
    );
}

export default Todo;
