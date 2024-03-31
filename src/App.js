import './App.css';
import React from 'react';
// import UseStateHook from './hooks/UseStateHook';
// import UseEffectHook1 from './hooks/UseEffectHook1';
// import UseEffectHook2 from './hooks/UseEffectHook2';
// import UseContextHook from './hooks/UseContextHook';
import UseRefHook from './hooks/UseRefHook';


//useContext
export const ThemeContext = React.createContext ('light');
export const UserContext = React.createContext ();
// const user = {
//   name: 'kiruba',
//   email: 'kumar@gmail.com',
// };

function App () {
  return (
    <div className="App">
      <header className="App-header">
        {/* <UseStateHook/> */}

        {/* <UseEffectHook1/> */}
        {/* <UseEffectHook2/> */}

        {/* <ThemeContext.Provider value="dark">
          <UserContext.Provider value={user}>
            <UseContextHook />
          </UserContext.Provider>
        </ThemeContext.Provider> */}

        <UseRefHook/>
      </header>
    </div>
  );
}

export default App;
