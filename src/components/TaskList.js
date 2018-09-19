import React from 'react'
import Task from './Task'

const TaskList = props => {
  return (
    <div className="all-tasks-container">
      {props.tasks.map(task => {
        return <Task key={task.taskId} task={task}/>
      })}
    </div>
  )
}

export default TaskList
