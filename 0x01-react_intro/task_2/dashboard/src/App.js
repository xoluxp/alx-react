// src/App.js

import React from 'react';
import './App.css';
import holbertonLogo from './holberton-logo.png';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>

        {/* Email Label and Input */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        {/* Password Label and Input */}
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        {/* OK Button */}
        <button type="button">OK</button>
      </main>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(false)}
        </p>
      </footer>
    </div>
  );
}

export default App;

