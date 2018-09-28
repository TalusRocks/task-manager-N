import React from 'react'
import NoteList from './NoteList'

const Task = props => {
  return (
    <div className="task-container">
      <div className="task-title"><h2>{props.task.title}</h2></div>

      <div className="task-note">
        <input className="input-add-note" placeholder="Add note"></input>
        <i className="material-icons btn-add-note">add</i>
      </div>
    </div>
  )
}

export default Task

// <NoteList notes={props.task.notes}/>
