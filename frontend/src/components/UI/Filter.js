import styles from './Filter.module.css';

function Filter() {
    return (
        <div className={styles.filterContainer}>
            <h4>All</h4>
            <h4>Active</h4>
            <h4>Completed</h4>
        </div>
    );
}

export default Filter;
