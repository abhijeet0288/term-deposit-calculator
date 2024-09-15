import React from "react";
import TermDeposit from "./TermDeposit"
import logo from '../svgs/up-banking.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-Title">
          Term Deposit Calculator
        </h2>
      </header>
      <TermDeposit />
    </div>
  );
}

export default App;
