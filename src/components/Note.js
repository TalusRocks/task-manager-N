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
    let statusKey = Object.keys(status).find(key => status[key] == this.props.status)

    return (
      <div className={`task-note ${statusKey}-color`}>
        <i className={`material-icons ${statusKey}-icon`}>{this.props.status}</i>
        <p>{this.props.text}</p>
        <i className="material-icons icon-delete icon-delete-note">close</i>
      </div>
    )
  }
}

export default Note;
