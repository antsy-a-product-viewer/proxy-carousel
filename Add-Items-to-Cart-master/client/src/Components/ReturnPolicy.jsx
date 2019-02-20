import React from 'react';
import Modal from 'react-modal';
import style from './style.css.js'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class ReturnPolicy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exclusions: [],
      returnPolicy: [],
      returnOverview: [],
      giftWrapping: [],
      returnPolicyShown: false,
    };
    this.getReturnPolicy = this.getReturnPolicy.bind(this);
    this.showReturnPolicy = this.showReturnPolicy.bind(this);
    this.closeReturnPolicy = this.closeReturnPolicy.bind(this);
  }

  componentDidMount() {
    this.getReturnPolicy();
  }

  getReturnPolicy() {
    let returnable;
    let returnPolicy = '';
    let exclusion;
    let wrapping = '';
    console.log(this.props.data[0])
    if (this.props.data[0].availableToReturn) {
      returnable = 'Returns and exchanges accepted';
      exclusion = 'Exceptions may apply. ';
      returnPolicy = 'See return policy';
      wrapping = 'Gift wrapping available';
    } else {
      returnable = 'No returns or exchanges';
      exclusion = 'But please contact me if you have any problems with your order.';
    }
    this.setState({
      exclusions: exclusion,
      returnPolicy: returnable,
      returnOverview: returnPolicy,
      giftWrapping: wrapping,
    });
  }

  showReturnPolicy() {
    this.setState({
      returnPolicyShown: true,
    });
  }

  closeReturnPolicy() {
    this.setState({
      returnPolicyShown: false,
    });
  }


  render() {
    return (
      <div>
        <div className="returnOverview">
          <div className="returns" style={style.bold}>
            {this.state.returnPolicy}
          </div>
          <div className="returnPolicy">
            <span>{this.state.exclusions}</span>
            <span
              className="Return"
              style={style.cursor}
              onClick={this.showReturnPolicy}
            >
              {this.state.returnOverview}
            </span>
            <Modal
              isOpen={this.state.returnPolicyShown}
              onRequestClose={this.closeReturnPolicy}
              style={customStyles}
            >
              <div className="modalContainer" style={style.returnModal}>
                <h1>Returns & Exchanges</h1>
                <p> I gladly accept returns, exchanges, and cancellations</p>
                <p>Contact me within: 14 days of delivery </p>
                <p>Ship items back within: 30 days of delivery</p>
                <p>Request a cancellation within: 2 days of purchase</p>
                <h2>The following items can't be returned or exchanged</h2>
                <p>Because of the nature of these items, unless they arrive damaged or defective, I can't accept returns for: </p>
                <li style={style.bulletPoint}>Custom or personalized orders</li>
                <li style={style.bulletPoint}>Perishable products (like food or flowers)</li>
                <li style={style.bulletPoint}>Digital downloads</li>
                <li style={style.bulletPoint}>Intimate items (for health/hygiene reasons)</li>
              </div>
              <button className="closePolicy" onClick={this.closeReturnPolicy}> Close me </button>
            </Modal>

          </div>
          {' '}
          <br />
          <br />
          <div className="giftwrappingOptions">
            {this.state.giftWrapping}
          </div>
        </div>
        {' '}
        <hr style={style.hr}/>
      </div>
    );
  }
}

export default ReturnPolicy;
