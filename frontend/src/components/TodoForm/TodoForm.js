import { useState } from 'react';

import styles from './TodoForm.module.css';

function TodoForm({ addTodo, isSun }) {
    const [text, setText] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        addTodo(text);
        setText('');
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
                onChange={(e) => setText(e.target.value)}
            ></input>
        </form>
    );
}

export default TodoForm;
