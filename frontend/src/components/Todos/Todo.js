import crossIcon from '../../images/icon-cross.svg';
import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, isFirstTodo, isSun }) {
    const todoClassName = `${styles.todoContainer} ${
        isFirstTodo ? styles.firstTodo : ''
    } ${isSun ? '' : 'darkTheme'}`;

    return (
        <div
            className={todoClassName}
            onDoubleClick={() => deleteTodo(todo.id)}
        >
            <span className={styles.circle}></span>
            <h3>{todo.text}</h3>
            <img
                src={crossIcon}
                alt="Cross Icon"
                className={styles.crossIcon}
            ></img>
        </div>
    );
}

export default Todo;
