import React, { useState, useContext } from 'react';
import Input from '../Input/Input';
import TodoList from '../TodoList/TodoList';
import Panel from '../Panel/Panel';
import styles from './Main.module.css';
import AuthContext from '../../store/auth-context';

export const FILTER_MODE = {
    ALL: 'all',
    COMPLETED: 'completed',
    ACTIVE:'active',
}

const Main = ({ onModeChange }) => {
    const [todos, setTodos] = useState([]);
    const [filterMode, setFilterMode] = useState('all');

    const handleAddTodo = (value) => {
        const newTodo = {
            id: Date.now(),
            value: value,
            completed: false,
        }
        setTodos((prevTodos) => [newTodo, ...prevTodos]);
    }

    const handleCheck = (completed, id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => 
        todo.id === id ? {...todo, completed: !todo.completed } : todo))
    }

    const handleRemoveTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !==id))
    }

    const handleRemoveCompleted = () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed))
    }

    const getFilteredTodos = (filterType) => {
        const filteredTodos = filterType === FILTER_MODE.ALL ? todos :
        todos.filter(todo => 
        filterType === FILTER_MODE.ACTIVE ? !todo.completed : todo.completed
        );
        return filteredTodos;
    }  

    const active = getFilteredTodos(FILTER_MODE.ACTIVE);

    const ctx = useContext(AuthContext);
    const mainClass = `${styles.main} ${!ctx.isLightMode ? styles.darkMain : '' }`;
    const toggleModeClass = `${styles.toggleMode} ${!ctx.isLightMode ? styles.sun : '' }`;

    return (
        <main className={mainClass}>
            <div className={styles.title}>
                <h1>TODO</h1>
                <div 
                    onClick={() => onModeChange()} 
                    className={toggleModeClass}></div>
            </div>
            <Input onPress={handleAddTodo} />
            <div className={styles.board}>
                <TodoList
                    todos={getFilteredTodos(filterMode)}
                    onRemove={handleRemoveTodo}
                    onCheck={handleCheck}
                    />
                <Panel
                    onFilter={(val) => setFilterMode(val)}
                    filterMode={filterMode}
                    active={active.length}
                    RemoveCompleted={handleRemoveCompleted}
                    />
            </div>
            <span className={styles.footer}>Drag and drop to record list</span>
        </main>
    )
}

export default Main;