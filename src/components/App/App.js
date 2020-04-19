import React, { Component } from 'react';
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../ToDoList";
import ItemStatusFilter from "../ItemStatusFilter";

import "./App.css";

export default class App extends Component {

  state = {
    todoDate: [
      {label: 'Learn React', important: true, id: 1 },
      {label: 'Paint logo', important: false, id: 2 },
      {label: 'Drink tea', important: false, id: 3 }
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoDate }) => {
      const index = todoDate.findIndex((el) => el.id === id)

      const newArray = [
        ...todoDate.slice(0, index),
        ...todoDate.slice(index + 1)
      ]
      return {
        todoDate: newArray
      }
    })
  }

  render() {
    return (
      <div className="ToDoApp">
        <AppHeader/>
        <div className="TopPanel d-flex">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <TodoList
          todos={this.state.todoDate}
          onDeleted={this.deleteItem}
        />
      </div>
    );
  }
};


