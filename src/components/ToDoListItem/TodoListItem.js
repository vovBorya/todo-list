import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component{

  state = {
    done: false,
    important: false
  }

  onLabelClick = () => {
    this.setState((state) => ({
      done: !state.done
    }))
  }

  onExclamationClick = () => {
    this.setState((state) => ({
        important: !state.important
    }))
  }

  render() {
    const {label} = this.props
    const { done, important} = this.state;

    let classNames = 'todo-list-item'
    if(done) {
      classNames += ' done'
    }

    if (important) {
      classNames += ' important';
    }


    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={this.onLabelClick} >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success"
          onClick={this.onExclamationClick}
        >
          <i className="fa fa-exclamation"/>
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
        >
          <i className="fa fa-trash-o"/>
        </button>
        </span>
    )
  }
}
