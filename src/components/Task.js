import React, { Component } from 'react'
import NoteList from './NoteList'

class Task extends Component {
  constructor(props){
    super(props)
  }

  onDeleteTask = (e) => {
    this.props.onDeleteTask(e.target.id)
  }

  render() {
    return (
      <div className="task-container">
        <div className="task-title-row">
          <div className="task-title"><h2>{this.props.task.title}</h2></div>
          <i
            className="material-icons icon-delete"
            onClick={this.onDeleteTask}
            id={this.props.task.taskId}
            >delete</i>
        </div>
        <div className="task-note">
          <input className="input-add-note" placeholder="Add note"></input>
        </div>
      </div>
    )
  }
}

export default Task

// <NoteList notes={props.task.notes}/>

// <i className="material-icons btn-add-note">add</i>
