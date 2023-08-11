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

  useEffect(() => {
    console.log(todoList); 
  }, [todoList]);


  return (
    <div className="App">
      <Navbar />
      <Input addTodo={addTodo} />
      <List sending_todo_list = {todoList}/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

/*
Components for the to-do list app:
1. Header i.e navbar  ---------- DONE 
2. Div for the input field and the add button with classname as input-div and filename as input.js
3. Div for the list of to-do items with classname as list-div and filename as list.js
4. Footer filename as footer.js -------------- DONE

Additional features to add novality in the product:
1. Add a delete button for each item
2. Add a strikethrough for each item when it is completed
3. Add a button to clear all completed items
4. Add a button to clear all items
5. Create the to-do list date wise as well that shows previous remaining to-dos
6. Maybe add a login page to save the to-do list for each user
7. It will become different if i add a backend to it apart from login page that will save the to-do list for each user

*/