import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <img src="./logo.svg" alt="Logo" />
          <span>FoodWagon</span>
        </div>
        <nav>
          <a href="#">Search Food</a>
          <a href="#">Login</a>
        </nav>
      </header>
      <main className="main">
        <div className="content">
          <h1>Are you starving?</h1>
          <p>Within a few clicks, find meals that are accessible near you</p>
          <div className="search-box">
            <input type="text" placeholder="Enter Your Address" />
            <button>Find Food</button>
          </div>
        </div>
        <div className="image">
          <img src="https://via.placeholder.com/400" alt="Food" />
        </div>
      </main>
    </div>
  );
}

export default App;
