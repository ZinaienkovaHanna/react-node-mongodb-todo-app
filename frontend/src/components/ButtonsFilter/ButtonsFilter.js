import styles from './ButtonsFilter.module.css';

function ButtonsFilter({ isSun, filterTodo }) {
    return (
        <div
            className={
                isSun
                    ? styles.filterContainer
                    : `${styles.filterContainer} darkTheme`
            }
        >
            <button onClick={() => filterTodo('All')}>All</button>
            <button onClick={() => filterTodo('Active')}>Active</button>
            <button onClick={() => filterTodo('Completed')}>Completed</button>
        </div>
    );
}

export default ButtonsFilter;
