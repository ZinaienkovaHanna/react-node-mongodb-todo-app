import styles from './Filter.module.css';

function Filter({ isSun }) {
    return (
        <div
            className={
                isSun
                    ? styles.filterContainer
                    : `${styles.filterContainer} darkTheme`
            }
        >
            <h4>All</h4>
            <h4>Active</h4>
            <h4>Completed</h4>
        </div>
    );
}

export default Filter;
