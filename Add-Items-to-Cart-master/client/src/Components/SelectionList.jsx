import React from 'react';
import SelectionListPossibilities from './selectionListPossibilities.jsx';


class SelectionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateChange: false,
      itemInformation: [],
    };
    this.getItemInformation = this.getItemInformation.bind(this);
  }

  componentDidMount() {
    this.getItemInformation();
  }

  getItemInformation() {
    let itemInfo = {};
    let stateChanged = false;
    if (this.props.data[0].options) {
      itemInfo = this.props.data[0].options;
      stateChanged = true;
    }
    this.setState({
      itemInformation: itemInfo,
      stateChange: stateChanged,
    });
  }

  render() {
    return (
      <div className="selectionList">
        {this.state.stateChange ? <SelectionListPossibilities selection={this.state.itemInformation} /> : null }
      </div>
    );
  }
}


export default SelectionList;
