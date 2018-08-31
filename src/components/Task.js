import React from 'react'
import PropTypes from 'prop-types'
import TaskNote from './TaskNote'

class Task extends React.Component {
  render () {
    return (
      <div className="task-container">
        <div className="task-title"><h2>OMNI-1234</h2></div>
        <TaskNote />
        <div className="task-note add-note">
          <i class="material-icons">add</i>
          <p>Add note</p>
        </div>
      </div>
    )
  }
}

export default Task;
