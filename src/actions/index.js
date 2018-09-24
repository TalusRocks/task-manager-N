export const FETCH_DB_TASKS = 'FETCH_DB_TASKS'

export function fetchDbTasks() {
  return async(dispatch) => {
    const data = await fetch('https://2ivd6dxaqj.execute-api.us-west-2.amazonaws.com/latest/tasks')
    const json = await data.json()

    dispatch({
      type: FETCH_DB_TASKS,
      payload: json
    })
  }
}
