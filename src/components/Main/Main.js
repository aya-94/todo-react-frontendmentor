import React, { useState, useContext } from 'react';
import Input from '../Input/Input';
import TodoList from '../TodoList/TodoList';
import Buttons from '../Buttons/Buttons';
import styles from './Main.module.css';
import AuthContext from '../../store/auth-context';

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

    const handleFilter = (val) => {
        setFilterMode(val)
    }

    const handleRemoveTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !==id))
    }

    const handleRemoveCompleted = () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.completed === false))
    }

    const filteredTodos = todos.filter(todo => 
        filterMode === 'all' ? true :
        filterMode === 'active' ? !todo.completed :
        filterMode === 'completed' ? todo.completed : 
        false
    );

    const active = todos.filter(todo => {
        return !todo.completed;
    });

    const ctx = useContext(AuthContext);
    const mainClass = `${styles.main} ${!ctx.isLightMode ? styles.darkMain : styles.lightMain }`;
    const toggleModeClass = `${styles.toggleMode} ${!ctx.isLightMode ? styles.sun : styles.moon }`;

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
                    todos={filteredTodos}
                    onRemove={handleRemoveTodo}
                    onCheck={handleCheck}
                    filterMode={filterMode}
                    />
                <Buttons
                    onFilter={handleFilter}
                    filterMode={filterMode}
                    active={active}
                    RemoveCompleted={handleRemoveCompleted}
                    />
            </div>
            <span className={styles.footer}>Drag and drop to record list</span>
        </main>
    )
}

export default Main;