// import { combineReducers } from 'redux'
import { FETCH_DB_TASKS, CREATE_TASK, DELETE_TASK, CREATE_NOTE } from '../actions'

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
    case CREATE_NOTE:
      let updatedTasks = state.allTasks.map(el => {
        if (el.taskId === action.payload.Attributes.taskId) {
          el = action.payload.Attributes
        }
        return el
      })
      return {
        ...state,
        allTasks: updatedTasks
      }
    default:
      return state
  }
}
