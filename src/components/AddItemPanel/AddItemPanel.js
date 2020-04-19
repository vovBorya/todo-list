import React, { Component } from 'react';
import './AddItemPanel.css';

export default class AddItemPanel extends Component {

  render() {
    const { onAddItem } = this.props;

    return (
      <form className="AddItemPanel d-flex">
        <input type="text" id="add"
               placeholder={"task name"}
               className="form-control"
               onChange={this.onLabelChange}
        />
        <button
          className="btn btn-outline-secondary"
          onClick={() => onAddItem('df')}
        >
          Add task</button>
      </form>
    )
  };
};