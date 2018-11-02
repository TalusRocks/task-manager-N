import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createNote, deleteNote } from './actions'
import AddTaskInput from './components/AddTaskInput'
import TaskList from './components/TaskList'

class App extends Component {

  onCreateNote = ({ text, status, taskId }) => {
    this.props.dispatch(createNote({ text, status, taskId }))
  }

  onDeleteNote = ( taskId, noteId ) => {
    this.props.dispatch(deleteNote(taskId, noteId))
  }

  render() {
    return (
      <div>
        <AddTaskInput/>
        <TaskList
          allTasks={this.props.allTasks}
          onCreateNote={this.onCreateNote}
          onDeleteNote={this.onDeleteNote}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allTasks: state.allTasks
})

const mapDispatchToProps = state => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
