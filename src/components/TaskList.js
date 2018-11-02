import React, { Component } from 'react'
import { connect } from 'react-redux'
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
          return <Task
            key={task.taskId}
            task={task}
            />
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allTasks: state.allTasks
})

const mapDispatchToProps = state => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)
