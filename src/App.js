import React, { Component } from 'react';
import './style.scss';

class App extends Component {
  render() {
    return (
      <div className="task-container">
        <div className="task-title">Title</div>
        <div className="task-note">Note</div>
      </div>
    );
  }
}

export default App;
