import { FETCH_DB_TASKS } from '../actions'

export default function allTasks(state = { tasks: [] }, action) {
  switch (action.type) {
    case FETCH_DB_TASKS:
      return {
        ...state,
        tasks: action.payload
      }
    default:
      return state
  }
}
