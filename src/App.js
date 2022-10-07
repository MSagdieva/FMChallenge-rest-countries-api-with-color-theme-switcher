import './App.css';
import React from 'react';
import { useState } from "react";
import { MainPage } from './pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import lightStyles from './assets/lightThemeStylesheet.module.css';
import darkStyles from './assets/darkThemeStylesheet.module.css';
import "./assets/generalStyles.css"

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div id="App" className={"App " + (theme==="dark" ? darkStyles.app_container: lightStyles.app_container)} >
        <MainPage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
