import React from 'react';

const List = ({ sending_todo_list , sending_del_func}) => {

  if (!sending_todo_list || sending_todo_list.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '10px' }}> <b><u>No To-Do Items Added Yet</u></b></p>;
  }
  return (
    <div className='todolistitem'>
      <ul className='list-group'>
        {sending_todo_list.map((todo, index) => (
          <li className='list-group-item' key={index}>
            <div className='todo-container'>
              <span className='todo-text'>{todo}</span>
              <button className='btn btn-danger' onClick={()=>{sending_del_func(index)}} >CUT</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
