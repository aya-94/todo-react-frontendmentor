import React, { useState, useContext } from 'react';
import Input from '../Input/Input';
import TodoList from '../TodoList/TodoList';
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
        console.log(val)
        setFilterMode(val)
        console.log(filterMode)
    }

    const handleRemoveTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !==id))
    }

    const handleRemoveCompleted = () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.completed === false))
    }

    const filteredTodos = todos.filter(todo => {
        if (filterMode === 'all') return true;
        if (filterMode === 'active') return !todo.completed;
        if (filterMode === 'completed') return todo.completed;

        return false;
    });

    const active = todos.filter(todo => {
        return !todo.completed;
    });

    const ctx = useContext(AuthContext)

    return (
        <main className={`${styles.main} ${!ctx.isLightMode ? styles.darkMain : styles.lightMain }`}>
            <div className={styles.title}>
                <h1>TODO</h1>
                <div onClick={() => onModeChange()} className={`${styles.toggleMode} ${!ctx.isLightMode ? styles.sun : styles.moon }`}></div>
            </div>
            <Input onPress={handleAddTodo} />
            <TodoList
            todos={filteredTodos}
            onRemove={handleRemoveTodo}
            onCheck={handleCheck}
            onFilter={handleFilter}
            filterMode={filterMode}
            active={active}
            RemoveCompleted={handleRemoveCompleted}
            />
            <span className={styles.footer}>Drag and drop to record list</span>
        </main>
    )
}

export default Main;