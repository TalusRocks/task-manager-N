import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteTask } from '../actions'
import NoteList from './NoteList'
import AddNoteInput from './AddNoteInput'

class Task extends Component {

  onDeleteTask = (e) => {
    this.props.deleteTask(e.target.id)
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
            >close
          </i>
        </div>
        <NoteList
          notes={this.props.task.notes}
          taskId={this.props.task.taskId}
          onDeleteNote={this.props.onDeleteNote}
          />
        <AddNoteInput
          onCreateNote={this.props.onCreateNote}
          id={this.props.task.taskId}
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ deleteTask }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task)
