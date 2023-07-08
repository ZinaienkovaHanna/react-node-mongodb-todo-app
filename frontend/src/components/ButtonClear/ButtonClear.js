import styles from './ButtonClear.module.css';

function ButtonClear({ isSun, todos }) {
    return (
        <div
            className={
                isSun
                    ? styles.buttonContainer
                    : `${styles.buttonContainer} darkTheme`
            }
        >
            <h5>{todos.length} items left</h5>
            <button>Clear Completed</button>
        </div>
    );
}

export default ButtonClear;
