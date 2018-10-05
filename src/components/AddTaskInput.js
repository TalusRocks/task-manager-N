import React, { Component } from 'react'

class AddTaskInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  onTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  onCreateTask = (e) => {
    e.preventDefault()
    // call function that dispatches ACTION
    this.props.onCreateTask({ title: this.state.title })
    this.resetForm()
  }

  resetForm() {
    this.setState({ title: '' })
  }

  render() {
    return (
      <div className="add-task-container">
        <form className="form-add-task">
          <input
            className="input-add-task"
            onChange={this.onTitleChange}
            value={this.state.title}
            placeholder="Add Task">
          </input>
          <button
            className="btn-submit-hidden"
            onClick={this.onCreateTask}>
          </button>
        </form>
      </div>
    )
  }
}

export default AddTaskInput
