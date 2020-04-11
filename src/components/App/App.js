import React from 'react';
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../ToDoList";
import ItemStatusFilter from "../ItemStatusFilter";

import "./App.css";

const App = () => {
  const todoDate = [
    {label: 'Learn React', important: true, id: 1 },
    {label: 'Paint logo', important: false, id: 2 },
    {label: 'Drink tea', important: false, id: 3 }
  ];

  return (
    <div className="ToDoApp">
      <AppHeader/>
      <div className="TopPanel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
      <TodoList todos={todoDate}/>
    </div>
  );
};

export default App;

