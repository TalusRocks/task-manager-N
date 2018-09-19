import React, { Component } from 'react';
import TaskList from './components/TaskList'

const mockTasks = [
  {
    "taskId": "123",
    "title": "something",
    "notes": []
  },
  {
    "taskId": "456",
    "title": "something else",
    "notes": [
      {
        "noteId": "001",
        "text": "this is a note",
        "status": "ASTATUS"
      },
      {
        "noteId": "002",
        "text": "different note",
        "status": "DIFSTATUS"
      }
    ]
  },
  {
    "taskId": "890",
    "title": "third",
    "notes": [
      {
        "noteId": "003",
        "text": "one note",
        "status": "HELLO"
      }
    ]
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <TaskList tasks={mockTasks}/>
      </div>
    );
  }
}

export default App;
