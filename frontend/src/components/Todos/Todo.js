import crossIcon from '../../images/icon-cross.svg';

import styles from './Todo.module.css';

function Todo({ todo, index, deleteTodo, isFirstTodo }) {
    const todoClassName = `${styles.todoContainer} ${
        isFirstTodo ? styles.firstTodo : ''
    }`;

    return (
        <div className={todoClassName} onDoubleClick={() => deleteTodo(index)}>
            <span className={styles.circle}></span>
            <h3>{todo}</h3>
            <img src={crossIcon} alt="Cross Icon"></img>
        </div>
    );
}

export default Todo;
