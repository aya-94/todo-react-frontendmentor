import React, { useState } from 'react';
import Main from './components/Main/Main';
import AuthContext from './store/auth-context';
import styles from './App.module.css';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const handleMode = () => {
      setIsLightMode(!isLightMode)
      console.log(isLightMode)
  }

  return (
    <AuthContext.Provider value={{isLightMode: isLightMode}} >
      <div className={`${styles.App} ${isLightMode ? styles.lightBackground : styles.darkBackground }`}>
        <Main onModeChange={handleMode}/>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
