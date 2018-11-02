import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createNote } from '../actions'
import { status } from '../constants'

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
    this.props.createNote({
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
    if (this.state.status === status.TODO){
      this.setState({ status: status.QUESTION})
    } else if (this.state.status === status.QUESTION) {
      this.setState({ status: status.BLOCKED})
    } else if (this.state.status === status.BLOCKED) {
      this.setState({ status: status.TODO})
    }
  }

  render() {
    let statusKey = Object.keys(status).find(key => status[key] === this.state.status)
    return (
      <form className="task-note">
        <i
          className={`material-icons ${statusKey}-icon`}
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

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createNote }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNoteInput)
