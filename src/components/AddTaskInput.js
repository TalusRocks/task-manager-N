import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createTask } from '../actions'

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
    // dispatch ACTION
    this.props.createTask({ title: this.state.title })
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
            className="hide"
            onClick={this.onCreateTask}>
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createTask }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTaskInput)
