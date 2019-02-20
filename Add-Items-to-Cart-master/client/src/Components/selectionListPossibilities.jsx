import React from 'react';
import SelectionListEntries from './SelectionListEntries.jsx';

const SelectionListPossibilities = props => (
  <div>

    {Object.keys(props.selection).map(selection => <SelectionListEntries selection={selection} options={props.selection[selection]} />)}
  </div>
);
export default SelectionListPossibilities;

