import './App.css';
import Input from './components/input';
import List from './components/list';
import React, { useState, useEffect } from 'react';

function App() {

  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    setTodoList((prevTodoList) => [...prevTodoList, todo]); 
  };

  const handlealldelete = () => {
    setTodoList([]);
    setTimeout(() => {
      alert("All Items Deleted Successfully!");
    }, 100);
  };

  const handlecutbutton = (index) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo, i) => {
        return i !== index;
      });
    });
  };


  return (
    <div className="App">
      <Input addTodo={addTodo} />
      <List sending_todo_list = {todoList} sending_del_func = {handlecutbutton} handlealldelete={handlealldelete}/>

    </div>
  );
}

export default App;
