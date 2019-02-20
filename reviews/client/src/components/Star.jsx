import React from 'react';
import _ from 'underscore';
import styles from './css/reviewStyles.css.js';

const Star = (props) => {
  return (
    <div style={{
      alignSelf: 'center'
    }}>
      {_.times(props.stars, (n) =>{
        return (
          <img className={props.starClass} key={n} style={styles.star} src="https://s3-us-west-1.amazonaws.com/anstyicons/icon-star-512.png"></img>
        );
      })}
    </div>
  );
};

export default Star;
