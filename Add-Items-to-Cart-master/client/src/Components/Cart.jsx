import React from 'react';
import Modal from 'react-modal';
import SelectionList from './SelectionList.jsx';
import Overview from './Overview.jsx';
import ShippingInformation from './ShippingInformation.jsx';
import ReturnPolicy from './ReturnPolicy.jsx';
import style from './style.css.js'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};


class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomItem: Math.floor(Math.random() * 100 + 1), 
      description: [],
      price: [],
      option: [],
      haveInCart: Math.floor(Math.random() * 10 + 1),
      data: [],
      stateChange: false,
      quantity: [],
      stock: [],
      highStock: [],
      askedQuestion: false
    };
    this.postingDescription = this.postingDescription.bind(this);
    this.addedToCart = this.addedToCart.bind(this);
    this.openAskQuestion = this.openAskQuestion.bind(this);
    this.closeAskQuestion = this.closeAskQuestion.bind(this);
  }

  componentDidMount() {
    this.findQuantity();
    this.postingDescription();
  }


  postingDescription() {
    let endpoint = 'http://127.0.0.1:3000' + window.location.pathname;
    fetch(`${endpoint}` + 'item')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        console.log(res);
        this.setState({
          description: res[0].description,
          price: res[0].price,
          data: res,
          stateChange: true,
          stock: res[0].quantityInStock
        });
      })
      .then(() => {
        let stockCount = true;
        if (this.state.stock <= 10) {
          stockCount = false;
        }
        this.setState({
          highStock: stockCount
        });
      })
      .catch((err) => {
        return;
      })
  }

  addedToCart(event) {
    event.preventDefault();
    alert('Continue to checkout');
  }

  findQuantity() {
    const randomQuantity = Math.floor(Math.random() * 10 + 5);
    const quantity = [];
    for (let i = 0; i < randomQuantity; i++) {
      quantity.push(i);
    }
    this.setState({
      quantity
    });
  }

  openAskQuestion() {
    this.setState({ askedQuestion: true });
  }

  closeAskQuestion() {
    this.setState({ askedQuestion: false });
  }

  render() {
    return (
      <div id="container" style = {style.container}>

      <div>
        <div className="description" style={style.boldDescription}>{this.state.description }</div>
        {' '}
        <br />
        <div style={style.margin}>
          <span className="price" style={style.boldDescription}>
            {' '}
$
            {this.state.price}
            {' '}
          </span>
          <span className="question">
            <button
              className="askQuestion"
              style={style.askQuestion}
              onClick={this.openAskQuestion}
            >
              {' '}
Ask A Question
              {' '}

            </button>
            <Modal
              isOpen={this.state.askedQuestion}
              onRequestClose={this.closeAskQuestion}
              style={customStyles}
            >
              <div className="questionsModal" style={style.questionModal}>
                <h1>New conversation</h1>
                <p>with Kuribo from CoconutStudios</p>
                {this.state.stateChange ? (
                  <form>
                    {this.state.description}
, listing #
                    {' '}
                    {this.state.data[0]['productId']}
                    <input type="text" style={style.questionModalInput} />
                    <button
                      onClick={this.closeAskQuestion}
                      style={style.cancelModal}
                    >
Cancel

                    </button>
                    <button
                      onClick={this.closeAskQuestion}
                      style={style.closeModal}
                    >
Send

                    </button>
                  </form>
                ) : null}
              </div>
            </Modal>


          </span>
        </div>
        <div className="optionNames">
          {this.state.stateChange ? <SelectionList data={this.state.data} /> : null}
        </div>
        {' '}

        {this.state.stateChange ? (
          <div className="quantity">
          Quantity
            <br />
            <select style={style.quantity}>
              {this.state.quantity.map(amount => <option>{amount}</option>)}
            </select>
          </div>
        ) : null
        }

        <div>
          <div id="addToCard">
            <button
              onClick={this.addedToCart}
              className="addToCart"
              style={style.addToCart}
            >
              {' '}
Add to Cart
              {' '}

            </button>
          </div>

          {this.state.highStock
            ? (
              <div>
                <span style={style.leftFloat}>
                  <img
                    src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/mCz7hqj/videoblocks-shopping-trolley-cart-icon-in-and-out-animation-black-and-white_bfguek3mbz_thumbnail-full05.png"
                    style={style.inCartImg}
                  />
                </span>
                <span style={style.leftFloatBold}>Other people want this. </span>
                <span style={style.leftFloat}>
                  {' '}
                  {this.state.haveInCart}
                  {' '}
people have this in their carts right now
                  {' '}
                </span>
              </div>
            )
            : (
              <div>
                <span style={style.leftFloat}>
                  <img
                    src="data:image/png;base64,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"
                    style={style.runningOutImg}
                  />

                </span>
                <span style={style.almostGone}>Almost gone. </span>
                <span style={style.stock}>
There's only
                  {' '}
                  {this.state.stock}
                  {' '}
left.
                </span>
              </div>
            )
          }
        </div>
        {' '}
        <br />
        {' '}
        <br />
        {' '}
        <br />

        <hr style={style.hr}/>

        <div className="overview">
          {this.state.stateChange ? <Overview data={this.state.data} /> : null}
        </div>

        <div className="ShippingInfo">
          {this.state.stateChange ? <ShippingInformation data={this.state.data} /> : null }
        </div>
        <div className="ReturnPolicy">
          {this.state.stateChange ? <ReturnPolicy data={this.state.data} /> : null}
        </div>
      </div>
      </div>
    );
  }
}

export default Cart;
