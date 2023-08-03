import React, { useState } from "react";
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

    return (
        <div className={styles.inputContainer}>
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