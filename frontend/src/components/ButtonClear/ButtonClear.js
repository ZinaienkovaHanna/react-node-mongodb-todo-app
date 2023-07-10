import styles from './ButtonClear.module.css';

function ButtonClear({ isSun, todos, deleteCompletedTodos }) {
    const inCompleteTodos = todos.filter((todo) => !todo.isCompleted);

    return (
        <div
            className={
                isSun
                    ? styles.buttonContainer
                    : `${styles.buttonContainer} darkTheme`
            }
        >
            <h5>{inCompleteTodos.length} items left</h5>
            <button
                className={styles.buttonClear}
                onClick={deleteCompletedTodos}
            >
                Clear Completed
            </button>
        </div>
    );
}

export default ButtonClear;
