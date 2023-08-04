import React, { useState, useEffect } from 'react';
import Main from './components/Main/Main';
import AuthContext from './store/auth-context';
import styles from './App.module.css';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isLightMode
    ? 'hsl(0, 0%, 98%)'
    : 'hsl(235, 21%, 11%)';
  }, [isLightMode])

  const handleModeChange = () => {
      setIsLightMode(!isLightMode)
  }

  return (
    <AuthContext.Provider value={{isLightMode: isLightMode}} >
      <div className={styles.App}>
        <Main onModeChange={handleModeChange}/>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
