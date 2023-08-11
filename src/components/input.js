import React from 'react';

const Input = ({ addTodo }) => {
  const [inputValue, setInputValue] = React.useState(''); // <-- Use useState inside the component

  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log(inputValue);
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <form className="form-inline text-center">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="todoitem" className="sr-only">
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3> <u>Your To-Do</u></h3>
        <input
          style={{ width: '50%' }}
          type="text"
          className="form-control"
          id="todoitem"
          placeholder="Enter Your To-Do Item Here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
         </div>
        </div>
        <button type="submit" className="btn btn-primary mb-2" onClick={handleAddTodo}>
          ADD
        </button>
      </form>
    </div>
  );
};

export default Input;
