import React from 'react'
import NoteList from './NoteList'

const Task = props => {
  return (
    <div className="task-container">
      <div className="task-title"><h2>{props.task.title}</h2></div>
      <NoteList notes={props.task.notes}/>
      <div className="task-note add-note">
        <i className="material-icons">add</i>
        <p>Add note</p>
      </div>
    </div>
  )
}

export default Task
