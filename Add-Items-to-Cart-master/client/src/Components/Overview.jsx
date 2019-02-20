import React from 'react';
import OverviewList from './OverviewList.jsx';
import style from './style.css.js'

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: [],
      hasOverview: false,
    };
    this.getOverview = this.getOverview.bind(this);
  }

  componentDidMount() {
    this.getOverview();
  }

  getOverview() {
    let overviewBulletPoints = [];
    let overviewLength = false;
    const overview = this.props.data[0].overview;
    if (overview.length > 0) {
      overviewLength = true;
      overviewBulletPoints = overview;
    }
    this.setState({
      overview: overviewBulletPoints,
      hasOverview: overviewLength,
    });
  }

  render() {
    return (
      <div>

        {this.state.hasOverview
          ? (
            <div className="OverallOverview">
              <div className="Overview" style={style.bold}>
            Overview
              </div>
              <OverviewList overviews={this.state.overview} />
              <br />
              <hr style={style.hr}/>
              {' '}
            </div>
          )
          : null }

      </div>
    );
  }
}


export default Overview;
