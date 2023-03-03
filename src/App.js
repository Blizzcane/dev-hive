import React from 'react';
import './App.css'; // import CSS file
import Snippet from './components/Snippet';

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">DevHive</div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Mentors</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Sign In</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <h1>Welcome to DevHive!</h1>
        <p>We're glad you're here.</p>
        <Snippet />
      </main>
      <footer className="footer">
        <p>&copy; 2023 DevHive. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
