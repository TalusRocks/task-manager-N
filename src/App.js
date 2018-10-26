import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createTask, deleteTask, createNote, deleteNote } from './actions'
import AddTaskInput from './components/AddTaskInput'
import TaskList from './components/TaskList'

class App extends Component {

  onCreateTask = ({ title }) => {
    this.props.dispatch(createTask({ title }))
  }

  onDeleteTask = (taskId) => {
    this.props.dispatch(deleteTask(taskId))
  }

  onCreateNote = ({ text, status, taskId }) => {
    this.props.dispatch(createNote({ text, status, taskId }))
  }

  onDeleteNote = ( taskId, noteId ) => {
    this.props.dispatch(deleteNote(taskId, noteId))
  }

  render() {
    return (
      <div>
        <AddTaskInput onCreateTask={this.onCreateTask}/>
        <TaskList
          allTasks={this.props.allTasks}
          onDeleteTask={this.onDeleteTask}
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

export default connect(
  mapStateToProps
)(App)
