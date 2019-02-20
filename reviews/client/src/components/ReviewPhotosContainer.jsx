import React from 'react';
import ReviewPhotosCarousel from './ReviewPhotosCarousel.jsx';
import styles from './css/reviewPhotosContainerStyles.css.js';

class ReviewPhotosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.totalPages = this.totalPages.bind(this);
    this.clickRight = this.clickRight.bind(this);
    this.clickLeft = this.clickLeft.bind(this);
    this.state = {
      page: 1
    };
  }

  totalPages() {
    return Math.ceil(this.props.reviewImages.length / 5);
  }

  clickRight() {
    if (this.state.page < this.totalPages()) {
      this.setState({
        page: this.state.page + 1
      });
    }
  }

  clickLeft() {
    if (this.state.page > 1) {
      this.setState({
        page: this.state.page - 1
      });
    }
  }

  render () {
    return (
      <div style={styles.reviewPhotos}>
        <div style={styles.reviewHeader}>
          <div>Photos from reviews</div>
          <div style={styles.arrowContainer}>
            <button style={styles.arrowLeft} onClick={this.clickLeft}>
              <img src="https://www.shareicon.net/data/10x10/2015/10/18/658096_bracket_512x512.png"></img>
            </button>
            <button style={styles.arrowRight} onClick={this.clickRight}>
              <img src="https://www.shareicon.net/data/10x10/2015/10/18/658171_play_512x512.png"></img>
            </button>
          </div>
        </div>
        <ReviewPhotosCarousel reviewImages={this.props.reviewImages} openModal={this.props.openModal} page={this.state.page}/>
      </div>
    );
  }
}

export default ReviewPhotosContainer;