import styles from './TodoList.module.css';

const TodoList = ({ todos, onRemove, onCheck, onFilter, filterMode, RemoveCompleted, active }) => {

    return (
        <div className={styles.board}>
            <div className={styles.todoContainer}>
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
            <div className={styles.panelContainer}>
                <button className={styles.itemsNum}>{active.length} items left</button>
                <div className={styles.sortButtons}>
                <button
                        className={`${styles.all} ${filterMode === 'all' ? styles.activeFilter : ''}`}
                        onClick={() => onFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={`${styles.active} ${filterMode === 'active' ? styles.activeFilter : ''}`}
                        onClick={() => onFilter('active')}
                    >
                        Active
                    </button>
                    <button
                        className={`${styles.completed} ${filterMode === 'completed' ? styles.activeFilter : ''}`}
                        onClick={() => onFilter('completed')}
                    >
                        Completed
                    </button>
                </div>
                <button onClick={() => RemoveCompleted()} className={styles.clearComplete}>Clear Completed</button>
            </div>
        </div>
    )
}

export default TodoList;