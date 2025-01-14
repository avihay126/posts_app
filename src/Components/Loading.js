import React from 'react';
import './ComponentsStyle/Loading.css';

function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
