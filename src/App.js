import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createTask } from './actions'
import AddTaskInput from './components/AddTaskInput'
import TaskList from './components/TaskList'

class App extends Component {

  onCreateTask = ({ title }) => {
    this.props.dispatch(createTask({ title }))
  }

  render() {
    return (
      <div>
        <AddTaskInput onCreateTask={this.onCreateTask}/>
        <TaskList allTasks={this.props.allTasks}/>
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
