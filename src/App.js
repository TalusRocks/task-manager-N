import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddTaskInput from './components/AddTaskInput'
import TaskList from './components/TaskList'

class App extends Component {

  render() {
    return (
      <div>
        <AddTaskInput/>
        <TaskList/>
      </div>
    );
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = state => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
