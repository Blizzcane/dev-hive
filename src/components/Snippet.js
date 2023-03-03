import React from 'react';
import './Snippet.css';

const Snippet = () => {
  return (
    <div className="snippet-container">
      <div className="snippet-card">
        <div className="snippet-title">Snippet Title</div>
        <div className="snippet-description">Snippet Description</div>
        <pre className="snippet-code">console.log('Hello, world!');</pre> 

      </div>
    </div>
  );
};

export default Snippet;
