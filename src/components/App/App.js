import React, { Component } from 'react';
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../ToDoList";
import ItemStatusFilter from "../ItemStatusFilter";
import AddItemPanel from "../AddItemPanel/AddItemPanel";

import "./App.css";

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Learn React'),
      this.createTodoItem('Paint logo'),
      this.createTodoItem('Drink tea')
    ]
  };

  createTodoItem (label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id)
      const newArray = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ]
      return {
        todoData: newArray
      }
    })
  }

  addItem = (itemText) => {
    const newItem = this.createTodoItem(itemText);

    this.setState(({todoData})=> {
      const result = [
        ...todoData,
        newItem
      ];

      return {
        todoData: result
      }
    })
  }

  toggleProperty(array, id, propName) {
    const index = array.findIndex((el) => el.id === id)

    const oldItem = array[index];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    };

    return [
      ...array.slice(0, index),
      newItem,
      ...array.slice(index + 1)
    ]
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData} ) => ({
        todoData: this.toggleProperty(todoData, id, 'important')
    }));
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, 'done')
    }));
  };

  render() {

    const { todoData } = this.state;

    const doneCount = todoData.filter((el) => el.done).length;

    const toDoCount = todoData.length - doneCount;

    return (
      <div className="ToDoApp">
        <AppHeader toDo={toDoCount} done={doneCount}/>
        <div className="TopPanel d-flex">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone }
        />
        <AddItemPanel
          onAddItem={this.addItem}
        />
      </div>
    );
  }
};


