import React from 'react';
import Review from './Review.jsx';
import Item from './Item.jsx';
import reviewContainerStyles from './css/reviewContainerStyles.css.js';

const ReviewContainer = (props) => {
  return (
    <div>
      {props.reviews && props.reviews.slice(0, props.limit).map((review, index) => {
        return (
          <div className="review" key={index} style={reviewContainerStyles.container}>
            <img style ={reviewContainerStyles.profileImg} src={review.user_img}></img>
            <div>
              <Review key={review.review_id} review={review} stars={review.stars} imageClick={props.imageClick}/>
              <Item key={review.item_id} showPrice={props.showPrice} review={review} visitItem={props.visitItem}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewContainer;
