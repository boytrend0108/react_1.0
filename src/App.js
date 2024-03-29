
import './styles/App.scss';
import Router from './pages/Router';
import React, { useState }  from 'react';

export const MyThemeContext = React.createContext({theme: "dark"})
export const MyCountContext = React.createContext()

const App = () => { 
  const [theme, setTheme] = useState('dark')
  
  return (
    <div className="App">
      <h2 className="title"> Messenger React</h2>
      <MyThemeContext.Provider value={{theme, setTheme}}>
         <Router />
      </MyThemeContext.Provider>
    </div>
  );
}

export default App;
