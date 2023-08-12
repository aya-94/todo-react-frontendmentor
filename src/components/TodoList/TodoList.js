import styles from './TodoList.module.css';
import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const TodoList = ({ todos, onRemove, onCheck }) => {

    const ctx = useContext(AuthContext);
    const listClass = `${styles.todoContainer} ${!ctx.isLightMode ? styles.darkTodo : ''}`;
    
    return (
        <div className={listClass}>
            {todos.length === 0 ? (
                <div className={styles.emptyList}>No Items found</div>
            ) : (
                <ul>
                {todos.map(todo => {
                    const outerToggle = !todo.completed ? styles.outerCircle : styles.outerCheck;
                    const innerToggle = !todo.completed ? styles.innerCircle : styles.innerCheck;
                    const crossToggle = !todo.completed ? styles.titleValue : styles.titleCheck;
                    return (
                        <li key={todo.id}>
                            <div 
                                className={outerToggle} 
                                onClick={() => onCheck(todo.completed, todo.id)}>
                                <div className={innerToggle}></div>
                            </div>
                            <span className={crossToggle}>{todo.value}</span>
                            <div 
                                className={styles.cross} 
                                onClick={() => onRemove(todo.id)}>
                            </div>
                        </li>
                    )
                })}
            </ul>
            )}
        </div>
    )
}

export default TodoList;