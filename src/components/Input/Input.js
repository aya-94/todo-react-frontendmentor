import React, { useState, useContext } from "react";
import AuthContext from '../../store/auth-context';
import styles from './Input.module.css';

const Input = ({ onPress }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            if(inputValue.trim() !== '') {
                onPress(inputValue);
                setInputValue('')
            }
        }
    }

    const ctx = useContext(AuthContext);
    const inputStyles = `${styles.inputContainer} ${!ctx.isLightMode ? styles.darkInput : styles.lightInput}`;

    return (
        <div className={inputStyles}>
            <span className={styles.circleElement}></span>
            <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} 
            onKeyPress={handleKeyPress} 
            placeholder="Create a new todo..." />
        </div>
    )
}

export default Input