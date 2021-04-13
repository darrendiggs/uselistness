

import React, { useState} from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import TodoForm from './TodoForm';

function Todo({ todos, completeTodo, removeTodo, updateTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ?
        'todo-row animate__animated animate__bounceIn complete' :
        'todo-row animate__animated animate__bounceIn'}
      key={index}
      
    >

      <h4 key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </h4>
      <div className="icons">
        <IoIosCloseCircle
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <FiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />

      </div>

    </div>
  ))
}

export default Todo
