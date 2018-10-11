import React, { Component } from 'react'

class AddNoteInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      status: '',
      taskId: ''
    }
  }

  onNoteChange = (e) => {
    this.setState({ text: e.target.value, taskId: this.props.id })
  }

  onCreateNote = (e) => {
    e.preventDefault()
    this.props.onCreateNote({ text: this.state.text, taskId: this.props.id })
    this.resetForm()
  }

  resetForm() {
    this.setState({ text: '', taskId: '' })
  }

  render() {
    return (
      <form className="task-note">
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
