import React from 'react';
import './SearchPanel.css';

export default () => {
  return(
    <div className="divSearch">
      <input placeholder={"search"} className='search-input'/>
      <button className="btnSearch"></button>
    </div>
  );
};