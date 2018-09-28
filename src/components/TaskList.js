import React, { Component } from 'react'
import Task from './Task'

class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="all-tasks-container">
        {this.props.allTasks.map(task => {
          return <Task key={task.taskId} task={task}/>
        })}
      </div>
    )
  }
}

export default TaskList
