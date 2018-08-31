import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="all-tasks-container">
        <div className="task-container">
          <div className="task-title"><h2>OMNI-1234</h2></div>
          <div className="task-note todo-color">
            <i class="material-icons todo-icon">arrow_right_alt</i>
            <p>Note</p>
          </div>
          <div className="task-note todo-color">
            <i class="material-icons todo-icon">arrow_right_alt</i>
            <p>Note</p>
          </div>
          <div className="task-note todo-color">
            <i class="material-icons todo-icon">arrow_right_alt</i>
            <p>Note</p>
          </div>
          <div className="task-note question-color">
            <i class="material-icons question-icon">help_outline</i>
            <p>Note</p>
          </div>
          <div className="task-note blocked-color">
            <i class="material-icons blocked-icon">block</i>
            <p>Note</p>
          </div>
          <div className="task-note">
            <i class="material-icons">add</i>
            <p>Note</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
