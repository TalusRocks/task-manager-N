import React from 'react'
import PropTypes from 'prop-types'

class TaskNote extends React.Component {
  render () {
    return (
      <div className="task-note todo-color">
        <i class="material-icons todo-icon">arrow_right_alt</i>
        <p>This is a note about what to do next</p>
      </div>
    )
  }
}

export default TaskNote;
