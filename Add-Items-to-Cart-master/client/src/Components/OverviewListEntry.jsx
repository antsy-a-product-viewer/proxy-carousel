import React from 'react';
import style from './style.css.js'

const OverviewListEntry = props => (
  <li className="overview" style={style.bulletPoint}>
    {props.overview}
  </li>
);

export default OverviewListEntry;
