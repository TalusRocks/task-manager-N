import React, { Component } from 'react';
import { connect } from 'react-redux'
import TaskList from './components/TaskList'

class App extends Component {
  render() {
    return (
      <div>
        <div className="add-task-container">
          <input className="input-add-task" placeholder="Add Task"></input>
          <i className="material-icons btn-add-task">add</i>
        </div>
        <TaskList tasks={this.props.tasks}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App);
