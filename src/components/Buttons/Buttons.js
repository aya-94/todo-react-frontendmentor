import styles from './Buttons.module.css';
import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { FILTER_MODE } from "../Main/Main";

const Buttons = ({onFilter, filterMode, RemoveCompleted, active}) => {

    const ctx = useContext(AuthContext);
    const panelClass = `${styles.panelContainer} ${!ctx.isLightMode ? styles.darkButton : styles.lightButton}`
    const buttonAll = `${styles.all} ${filterMode === 'all' ? styles.activeFilter : ''}`;
    const buttonActive = `${styles.active} ${filterMode === 'active' ? styles.activeFilter : ''}`;
    const buttonCompleted = `${styles.completed} ${filterMode === 'completed' ? styles.activeFilter : ''}`;
    
    return (
        <div className={panelClass}>
            <button className={styles.itemsNum}>{active} items left</button>
            <button 
                className={styles.clearComplete}
                onClick={() => RemoveCompleted()} 
                >
                    Clear Completed
                </button>
            <div className={styles.sortButtons}>
                <button
                    className={buttonAll}
                    onClick={() => onFilter(FILTER_MODE.ALL)}
                >
                    All
                </button>
                <button
                    className={buttonActive}
                    onClick={() => onFilter(FILTER_MODE.ACTIVE)}
                >
                    Active
                </button>
                <button
                    className={buttonCompleted}
                    onClick={() => onFilter(FILTER_MODE.COMPLETED)}
                >
                    Completed
                </button>
            </div>
        </div>
    )
}

export default Buttons;