import React from 'react';
import moment from 'moment';
import _ from 'underscore';
import Star from './Star.jsx';
import Item from './Item.jsx';
import modalStyles from './css/modalStyles.css.js';

const Modal = (props) => {
  if (!props.showModal) {
    return null;
  } else {
    return (
      <div className="modal" id="modal-overlay" style={modalStyles.modal} onClick={props.onClose}>
        <section style={modalStyles.modalMain}>
          <div>
            <img style={modalStyles.image} src={props.review.review_img}></img>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div className="modalReview" style={{marginTop: 20}}>
              <div style={modalStyles.userInfo}>
                <img style ={modalStyles.profileImg} src={props.review.user_img}></img>
                <div style={modalStyles.username}>{props.review.user_name}</div>
                <div style={modalStyles.date}>{moment(props.review.created_at).format('MMM DD, YYYY')}</div>
              </div>
              <div style={modalStyles.review}>
                <Star stars={props.review.stars}/>
                <div>{props.review.review}</div>
              </div>
            </div>
            <div className="modalItem">
              <div style={modalStyles.item}>
                <Item showPrice="true" review={props.review} visitItem={props.visitItem}/>
              </div>
            </div>
          </div>
          <button className="closeModal"style={modalStyles.button} onClick={props.onClose}>
            <img id="close-modal" style={modalStyles.buttonImg} src="https://cdn0.iconfinder.com/data/icons/elasto-online-store/26/00-ELASTOFONT-STORE-READY_close-512.png"></img>
          </button>
        </section>
      </div>
    );
  }
};

export default Modal;
