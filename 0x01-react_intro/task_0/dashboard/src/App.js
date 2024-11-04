import React from 'react';
import './App.css'; // Create this file if it doesn’t exist and style as needed
import holbertonLogo from './holberton-logo.png'; // Update filename based on actual logo name

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
      </main>
      <footer className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
