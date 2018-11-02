import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddTaskInput from './components/AddTaskInput'
import TaskList from './components/TaskList'

class App extends Component {

  render() {
    return (
      <div>
        <AddTaskInput/>
        <TaskList
          allTasks={this.props.allTasks}
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
