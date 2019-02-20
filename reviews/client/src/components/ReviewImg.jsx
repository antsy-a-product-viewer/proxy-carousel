import React from 'react';

const ReviewImg = (props) => {
  const clickImage = (event) => {
    props.imageClick(event.target.id);
  };

  if (props.review.review_img !== null) {
    return (
      <img id={props.review.review_id} style={{height: 300, width: 300, marginTop: 10}} src={props.review.review_img} onClick={clickImage}></img>
    );
  } else {
    return null;
  }
};

export default ReviewImg;
