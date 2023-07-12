import ButtonFilter from '../ButtonFilter/ButtonFilter';

import styles from './ButtonContainer.module.css';

function ButtonContainer({ isSun, todos, deleteCompletedTodos, filterTodo }) {
    const inсompleteTodos = todos.filter((todo) => !todo.isCompleted);

    return (
        <div
            className={
                isSun
                    ? styles.buttonContainer
                    : `${styles.buttonContainer} darkTheme`
            }
        >
            <div className={styles.flexContainer}>
                <h5>{inсompleteTodos.length} items left</h5>

                <button
                    className={styles.buttonClear}
                    onClick={deleteCompletedTodos}
                >
                    Clear Completed
                </button>
            </div>

            <ButtonFilter
                isSun={isSun}
                filterTodo={filterTodo}
                className={styles.buttonFilter}
            />

            <h2>Drag and drop to reorder list</h2>
        </div>
    );
}

export default ButtonContainer;
