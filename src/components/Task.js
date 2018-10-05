import React, { Component } from 'react'
import NoteList from './NoteList'
import AddNoteInput from './AddNoteInput'

class Task extends Component {

  onDeleteTask = (e) => {
    this.props.onDeleteTask(e.target.id)
  }

  render() {
    return (
      <div className="task-container">
        <div className="task-title-row">
          <div
            className="task-title"
            ><h2>{this.props.task.title}</h2>
          </div>
          <i
            className="material-icons icon-delete"
            onClick={this.onDeleteTask}
            id={this.props.task.taskId}
            >delete
          </i>
        </div>
        <NoteList notes={this.props.task.notes}/>
        <AddNoteInput
          onCreateNote={this.props.onCreateNote}
          id={this.props.task.taskId}
          />
      </div>
    )
  }
}

export default Task
