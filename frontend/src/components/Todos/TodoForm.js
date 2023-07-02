import { useState } from 'react';

import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
    const [text, setText] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        addTodo(text);
        setText('');
    };

    return (
        <form onSubmit={onSubmitHandler}>
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
