import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component{

  state = {
    done: true
  }

  onLabelClick = () => {
    const { done } = this.state;
    if (done) {
      this.setState({
        done: false
      });
    } else {
      this.setState({
        done: true
      });
    }

  };

  render() {
    const {label, important = false} = this.props
    const { done } = this.state;

    let classNames = 'todo-list-item'
    if(done) {
      classNames += ' done'
    }

    const style = {
      color: important ? 'steelblue': 'black',
      fontWeight: important ? 'bold': 'normal'
    };

    return (
      <span className={classNames}>
        <span
          style={style}
          className="todo-list-item-label"
          onClick={this.onLabelClick} >
          {label}
        </span>

        <button type="button"
            className="btn btn-outline-success">
          <i className="fa fa-exclamation"/>
        </button>
        <button type="button"
            className="btn btn-outline-danger">
          <i className="fa fa-trash-o"/>
        </button>
        </span>
    )
  }
}
