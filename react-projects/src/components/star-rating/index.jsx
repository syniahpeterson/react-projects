import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

// Star Rating Component - Interactive 5-star rating system
const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0); // Permanent rating
  const [hover, setHover] = useState(0); // Hover preview

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="wrapper">
      <h2>Star Rating</h2>
      <div className="star-rating">
        {/* Generate array of stars based on noOfStars prop */}
        {[...Array(noOfStars)].map((_, index) => {
          index += 1; // Convert to 1-based indexing for user-friendly rating

          return (
            <FaStar
              key={index}
              // Star is active if index is <= current hover or permanent rating
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)} // Set permanent rating
              onMouseMove={() => handleMouseEnter(index)} // Show hover preview
              onMouseLeave={() => handleMouseLeave()} // Reset to permanent rating
              size={40} // Icon size in pixels
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
