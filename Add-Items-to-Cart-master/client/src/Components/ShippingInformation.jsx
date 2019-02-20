import React from 'react';
import style from './style.css.js'

class ShippingInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingTime: [],
      getShippingCost: false,
      shippingCost: [],
      enteredShippingInfo: false,
      zipCode: [],
      shippingFrom: [],
      shippingTo: [],
      shippingToCountry: 'China',
      deliveryDate: [],
    };
    this.getShippingInformation = this.getShippingInformation.bind(this);
    this.getShippingInfo = this.getShippingInfo.bind(this);
    this.showShipping = this.showShipping.bind(this);
    this.shippingCost = this.shippingCost.bind(this);
    this.shippingToCountry = this.shippingToCountry.bind(this);
  }


  componentDidMount() {
    this.getShippingInformation();
  }

  getShippingInformation() {
    let manufacturingTime = null;
    const shippingFrom = this.props.data[0].shippingFrom;
    const shippingTo = this.props.data[0].shippingTo;
    const deliveryDate = this.props.data[0].deliveryDate;
    manufacturingTime = this.props.data[0].manufacturingTime;
    this.setState({
      shippingTime: manufacturingTime,
      shippingFrom,
      shippingTo,
      deliveryDate,
    });
  }

  getShippingInfo() {
    event.preventDefault();
    this.setState({
      getShippingCost: !this.state.getShippingCost,
    });
  }

  showShipping() {
    event.preventDefault();
  }

  shippingCost() {
    const shippingCost = this.props.data[0].shippingCosts;
    if (typeof parseInt(event.target.value) === 'number' && event.target.value.length === 5) {
      this.setState({
        shippingCost,
        enteredShippingInfo: true,
        getShippingCost: !this.state.getShippingCost,
        zipCode: event.target.value,
      });
    }
  }

  shippingToCountry() {
    this.setState({
      shippingToCountry: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <div className="shippingInformation">
          <div style={style.bold}>
        Shipping & Returns
          </div>
          {!this.state.enteredShippingInfo
            ? (
              <div>
                <div className="manufacturingTime" style={style.bold}>
              Ready to ship in
                  {' '}
                  {this.state.shippingTime}
-
                  {this.state.shippingTime + 2}
                  {' '}
days
                </div>
                <div className="shippedFrom">
            From
                  {' '}
                  {this.state.shippingFrom}
                </div>
                <div className="getShippingCost" style={style.cursor} onClick={this.getShippingInfo}>
             Get Shipping Cost
                </div>
              </div>
            )

            : (
              <div>
                <div className="deliver" style={style.bold}>
            Estimated delivery:
                  {' '}
                  {this.state.deliveryDate[0]}
                  {' '}
                  {this.state.shippingTime + 2}
                  {' '}
-
                  {' '}
                  {this.state.deliveryDate[1]}
                  {' '}
                  {this.state.shippingTime + 7}
                </div>
                <div className="shippedFrom">
            From
                  {' '}
                  {this.state.shippingFrom}
                </div>
                <span className="shippingCost">
            $
                  {this.state.shippingCost}
                  {' '}
shipping to
                  {' '}
                  {' '}
                </span>
                <span
                  className="shippingAddress"
                  style={style.underline}
                  onClick={this.getShippingInfo}
                >
                  {this.state.shippingToCountry}
,
                  {' '}
                  {this.state.zipCode}
                </span>
              </div>
            )
      }

          {this.state.getShippingCost
            ? (
              <form onSubmit={this.showShipping}>
                <span style={style.leftFloat}>
              Country
                  {' '}
                  <br />
                  <select
                    className="country"
                    style={style.shippingCostInput}
                    value={this.state.value}
                    onChange={this.shippingToCountry}
                  >
                    {this.state.shippingTo.map(country => <option className="options">{country}</option>)}
                  </select>
                </span>
                <span style={style.rightFloat}>
              Zip or postal code
                  {' '}
                  <br />
                  <label>
                    <input
                      onClick={this.shippingCost}
                      id="shippingCost"
                      type="text"
                      value={this.state.value}
                    />
                  </label>
                </span>
              </form>
            ) : null}

        </div>
        {' '}
        <br />
        {' '}
        <br />
        {' '}
        <hr style={style.hr}/>
      </div>
    );
  }
}

export default ShippingInformation;
