/** @format */

import { Checkbox, IconButton, ListItem, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id)
  }

  function handleRemoveClick() {
    removeTodo(todo.id)
  }

  return (
    <ListItem style={{ display: 'flex' }}>
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <Typography
        variant="h4"
        style={{
          textDecoration: todo.completed ? 'line-through' : null,
        }}
      >
        {todo.task}
      </Typography>
      <IconButton color="secondary" onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  )
}

export default Todo
