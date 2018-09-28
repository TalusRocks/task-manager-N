// import { combineReducers } from 'redux'
import { FETCH_DB_TASKS, CREATE_TASK, DELETE_TASK } from '../actions'

export default function allTasks(state = { allTasks: [] }, action) {
  switch (action.type) {
    case FETCH_DB_TASKS:
      return {
        ...state,
        allTasks: action.payload
      }
    case CREATE_TASK:
      return {
        ...state,
        allTasks: state.allTasks.concat(action.payload)
      }
    case DELETE_TASK:
      const remainingTasks = state.allTasks.filter(el => {
        return el.taskId !== action.payload
      })
      return {
        ...state,
        allTasks: remainingTasks
      }
    default:
      return state
  }
}
