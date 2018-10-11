import React, { Component } from 'react'

const status = {
  TODO: 'arrow_right_alt',
  QUESTION: 'help',
  BLOCKED: 'block'
}

class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="task-note todo-color">
        <i className={`material-icons todo-icon`}>{this.props.status}</i>
        <p>{this.props.text}</p>
        <i className="material-icons icon-delete icon-delete-note">close</i>
      </div>
    )
  }
}

export default Note;
