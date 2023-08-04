import styles from './Buttons.module.css';
import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const Buttons = ({onFilter, filterMode, RemoveCompleted, active}) => {

    const ctx = useContext(AuthContext);
    const panelClass = `${styles.panelContainer} ${!ctx.isLightMode ? styles.darkButton : styles.lightButton}`
    const buttonAll = `${styles.all} ${filterMode === 'all' ? styles.activeFilter : ''}`;
    const buttonActive = `${styles.active} ${filterMode === 'active' ? styles.activeFilter : ''}`;
    const buttonCompleted = `${styles.completed} ${filterMode === 'completed' ? styles.activeFilter : ''}`;
    
    return (
        <div className={panelClass}>
            <button className={styles.itemsNum}>{active.length} items left</button>
            <div className={styles.sortButtons}>
            <button
                    className={buttonAll}
                    onClick={() => onFilter('all')}
                >
                    All
                </button>
                <button
                    className={buttonActive}
                    onClick={() => onFilter('active')}
                >
                    Active
                </button>
                <button
                    className={buttonCompleted}
                    onClick={() => onFilter('completed')}
                >
                    Completed
                </button>
            </div>
            <button 
                className={styles.clearComplete}
                onClick={() => RemoveCompleted()} 
                >
                    Clear Completed
                </button>
        </div>
    )
}

export default Buttons;