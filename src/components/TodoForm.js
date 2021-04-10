

import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })

    setInput('')
  };

  return (
    <form className="todo-form " onSubmit={handleSubmit}>
      {props.edit ?
        (<div className="input-group">
          <input
            type="text"
            placeholder="Update"
            value={input} name="text"
            className="todo-input edit form-control"
            onChange={handleChange}
            ref={inputFocus}
          />
          <div class="input-group-append">
            <button className="todo-button edit btn btn-outline-light" >Update</button>
          </div>
        </div>)
        :
        (<div className="input-group">
          <input
            type="text"
            placeholder="Add a todo"
            value={input} name="text"
            className="todo-input form-control"
            onChange={handleChange}
            ref={inputFocus}
          />
          <div class="input-group-append">
            <button className="todo-button btn btn-outline-light">Add todo</button>
          </div>
        </div>)
      }
    </form>
  );
}

export default TodoForm
