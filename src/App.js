import React, { Component } from 'react';
import { connect } from 'react-redux'
import TaskList from './components/TaskList'

class App extends Component {
  render() {
    return (
      <div>
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
