

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
        (<>
          <input
            type="text"
            placeholder="Update"
            value={input} name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputFocus}
          />
          
            <button className="todo-button edit" >Update</button>
          
        </>)
        :
        (<>
          <input
            type="text"
            placeholder="something you're not planning on doing."
            value={input} name="text"
            className="todo-input "
            onChange={handleChange}
            ref={inputFocus}
          />
      
            <button className="todo-button">Add todo</button>
         
        </>)
      }
    </form>
  );
}

export default TodoForm
