// import { combineReducers } from 'redux'
import { FETCH_DB_TASKS, CREATE_TASK } from '../actions'

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
    default:
      return state
  }
}
