import React from 'react';
import itemStyles from './css/itemStyles.css';

const Item = (props) => {
  const clickItem = (event) => {
    props.visitItem(event.target.id);
  };

  if (props.showPrice === 'false') {
    return (
      <div style={itemStyles.wrapper}>
        <img id={props.review.item_id} style={itemStyles.itemImg} onClick={clickItem} src={props.review.item_img}></img>
        <div id={props.review.item_id} style={itemStyles.reviewItemInfo} onClick={clickItem}>{props.review.item_name}</div>
      </div>
    );
  } else {
    return (
      <div style={itemStyles.wrapper}>
        <img id={props.review.item_id} style={itemStyles.itemImg} onClick={clickItem} src={props.review.item_img}></img>
        <div style={itemStyles.reviewItemInfo}>
          <div id={props.review.item_id} onClick={clickItem}>{props.review.item_name}</div>
          <div>${props.review.price}.00</div>
        </div>
      </div>
    );
  }
};

export default Item;
