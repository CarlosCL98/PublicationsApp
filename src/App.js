import React from 'react';
import './App.scss';
import NavBar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <NavBar user={{name:"Carlos"}}/>
      <Main />
    </div>
  );
}

export default App;
