import './App.css';
import Navbar from './components/navbar';
import Input from './components/input';
import List from './components/list';
import React, { useState, useEffect } from 'react';

function App() {

  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    setTodoList((prevTodoList) => [...prevTodoList, todo]); 
  };

  const handlecutbutton = (index) => {
    console.log("DELETE COMMAND ISSUED FOR : ", index);
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo, i) => {
        return i !== index;
      });
    });
  };


  useEffect(() => {
    console.log(todoList); 
  }, [todoList]);


  return (
    <div className="App">
      {/* <Navbar /> */}
      <Input addTodo={addTodo} />
      <List sending_todo_list = {todoList} sending_del_func = {handlecutbutton}/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
