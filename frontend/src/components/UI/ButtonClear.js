import styles from './ButtonClear.module.css';

function ButtonClear() {
    return (
        <div className={styles.buttonContainer}>
            <h5>5 items left</h5>
            <button>Clear Completed</button>
        </div>
    );
}

export default ButtonClear;
