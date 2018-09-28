export const FETCH_DB_TASKS = 'FETCH_DB_TASKS'
export const CREATE_TASK = 'CREATE_TASK'

const baseURL = `https://2ivd6dxaqj.execute-api.us-west-2.amazonaws.com/latest`

export function fetchDbTasks() {
  return async(dispatch) => {
    const data = await fetch(`${baseURL}/tasks`)
    const json = await data.json()
    dispatch({
      type: FETCH_DB_TASKS,
      payload: json
    })
  }
}

export function createTask(task) {
  // task = {title: "string"}
  return async(dispatch) => {
    const data = await fetch(`${baseURL}/tasks`, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    const json = await data.json()

    if(data.ok){
      dispatch({
        type: CREATE_TASK,
        payload: json
      })
    } else {
      throw new Error('Could not create new task')
    }
  }
}
