import { useState } from 'react';

import styles from './TodoForm.module.css';

function TodoForm({ addTodo, isSun }) {
    const [text, setText] = useState('');
    const [isError, setIsError] = useState(false);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (text.trim() !== '') {
            addTodo(text);
            setText('');
            setIsError(false);
        } else {
            setIsError(true);
        }
    };

    const changeHandler = (event) => {
        setText(event.target.value);
        setIsError(false);
    };

    return (
        <form
            onSubmit={onSubmitHandler}
            className={
                isSun
                    ? styles.formContainer
                    : `${styles.formContainer} darkTheme`
            }
        >
            <span className={styles.circle}></span>
            <input
                placeholder="Create a new todo..."
                value={text}
                onChange={changeHandler}
                className={
                    isError
                        ? `${styles.inputNewTodo} ${styles.errorInput}`
                        : styles.inputNewTodo
                }
            ></input>
        </form>
    );
}

export default TodoForm;
