import React from 'react'

const Note = props => {
  return (
    <div className="task-note todo-color">
      <i className="material-icons todo-icon">arrow_right_alt</i>
      <p>{props.text}</p>
      <i className="material-icons icon-delete icon-delete-note">close</i>
    </div>
  )
}

export default Note;
