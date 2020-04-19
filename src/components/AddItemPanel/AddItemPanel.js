import React, { Component } from 'react';
import './AddItemPanel.css';

export default class AddItemPanel extends Component {

  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
  }

  render() {
    const { onAddItem } = this.props;

    return (
      <form
        className="AddItemPanel d-flex"
        onSubmit={this.onSubmit}
      >
        <input type="text" id="add"
               placeholder={"task name"}
               className="form-control"
               onChange={this.onLabelChange}
        />
        <button
          className="btn btn-outline-secondary"
        >
          Add task</button>
      </form>
    )
  };
};