import React from 'react';

const List = ({ sending_todo_list, sending_del_func }) => {

  if (!sending_todo_list || sending_todo_list.length === 0) {
    return (
      <h6 style={{ textAlign: 'center', marginTop: '10px' }}> <b><u>Nothing To Do For Now! </u></b></h6>
    );
  }
  return (
    <>
      <div className='todolistitem'>
        <ul className='list-group'>
          {sending_todo_list.map((todo, index) => (
            <li className='list-group-item' key={index}>
              <div className='todo-container'>
                <span className='todo-text'>{todo}</span>
                <button className='btn btn-danger' onClick={() => { sending_del_func(index) }}>CUT</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p style={{ textAlign: 'center', marginTop: '10px' }}> <b><u>Number of To-Do Items Remaining: {sending_todo_list.length}</u></b></p>

        <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', marginTop: '10px' }}>
          <button type="button" className="btn btn-success">Completed All Tasks? Click Here!</button>
        </div>
      </div>
    </>
  );
}

export default List;
