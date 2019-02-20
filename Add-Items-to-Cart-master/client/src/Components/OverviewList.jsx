import React from 'react';
import OverviewListEntry from './OverviewListEntry.jsx';

const OverviewList = props => (
  <div>
    {props.overviews.map(overview => <OverviewListEntry overview={overview} />)}
  </div>
);

export default OverviewList;
