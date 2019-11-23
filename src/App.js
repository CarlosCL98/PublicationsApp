import React from 'react';
import './App.scss';
import NavBar from "./components/Navbar";
import Publications from "./components/Publications";

function App() {

  localStorage.setItem("user", JSON.stringify({
    name: "Carlos",
    lastName: "Medina"
  }));

  return (
    <div className="app">
      <NavBar/>
      {/*Main component with the publications section*/}
      <Publications/>
    </div>
  );
}

export default App;
