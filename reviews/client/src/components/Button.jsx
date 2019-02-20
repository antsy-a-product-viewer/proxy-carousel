import React from 'react';
import containerStyles from './css/containerStyles.css.js';

const Button = (props) => {
  if (props.currentNumber === 4) {
    return (
      <div>
        <button style={containerStyles.moreButton} onClick={props.showMore}>+ More</button>
      </div>
    );
  } else {
    return (
      <button style={containerStyles.readAllButton}>Read All Reviews ({props.totalReviews})</button>
    );
  }
};

export default Button;
