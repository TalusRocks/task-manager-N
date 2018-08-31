import React, { Component } from 'react';
import Task from './components/Task'

class App extends Component {
  render() {
    return (
      <div className="all-tasks-container">
        <Task />
      </div>
    );
  }
}

export default App;
