import React from 'react';
import './App.css'; // Ensure this is importing the combined styles

const MainContent = () => {
  // Array of titles for each box
  const titles = [
    "Title 1", // Title for first box
    "Title 2", // Title for second box
    "Title 3", // Title for third box
    "Title 4"  // Title for fourth box
  ];

  return (
    <div className="main-content">
      {titles.map((title, index) => (
        <div className="box-container" key={index}>
          <div className="box"></div>
          <span className="box-label">{title}</span>
          <div className="stars">
            {[...Array(5)].map((star, i) => (
              <span key={i} className="star">&#9733;</span> // Unicode star symbol
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContent;