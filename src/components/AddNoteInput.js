import React, { Component } from 'react'

const status = {
  TODO: 'arrow_right_alt',
  QUESTION: 'help',
  BLOCKED: 'block'
}

class AddNoteInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      status: status.TODO,
      taskId: ''
    }
  }

  onNoteChange = (e) => {
    this.setState({ text: e.target.value, taskId: this.props.id })
  }

  onCreateNote = (e) => {
    e.preventDefault()
    this.props.onCreateNote({
      text: this.state.text,
      status: this.state.status,
      taskId: this.props.id
    })
    this.resetForm()
  }

  resetForm() {
    this.setState({ text: '', status: status.TODO, taskId: '' })
  }

  toggleStatus = (e) => {
    if (this.state.status == status.TODO){
      this.setState({ status: status.QUESTION})
    } else if (this.state.status == status.QUESTION) {
      this.setState({ status: status.BLOCKED})
    } else if (this.state.status == status.BLOCKED) {
      this.setState({ status: status.TODO})
    }
  }

  render() {
    return (
      <form className="task-note">
        <i
          className="material-icons todo-icon"
          onClick={this.toggleStatus}
        >{this.state.status}</i>
        <input
          className="input-add-note"
          onChange={this.onNoteChange}
          value={this.state.text}
          placeholder="Add note"
          >
        </input>
        <button
          className="hide"
          onClick={this.onCreateNote}
          >
        </button>
      </form>
    )
  }
}

export default AddNoteInput
