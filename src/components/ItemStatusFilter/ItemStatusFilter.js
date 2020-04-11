import React, {Component} from 'react';

import "./ItemStatusFilter.css"

export default class ItemStatusFilter extends Component{
  render() {
    return(
      <div className="buttons">
        <button type="button"
                className="btn btn-info">All</button>
        <button type="button"
                className="btn btn-outline-secondary">Active</button>
        <button type="button"
                className="btn btn-outline-secondary">Done</button>
      </div>
    )
  }
}