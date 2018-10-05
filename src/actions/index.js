export const FETCH_DB_TASKS = 'FETCH_DB_TASKS'
export const CREATE_TASK = 'CREATE_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const CREATE_NOTE = 'CREATE_NOTE'

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

export function deleteTask(taskId) {
  return async(dispatch) => {
    const data = await fetch(`${baseURL}/tasks/${taskId}`, {
      method: 'DELETE'
    })

    if(data.ok){
      dispatch({
        type: DELETE_TASK,
        payload: taskId
      })
    } else {
      throw new Error('Could not delete task')
    }
  }
}

export function createNote(note) {
  // note = {text: "string", taskId: "string"}
  let tempSchema = {
    noteId: '',
    text: note.text,
    status: 'TEMPSTATUS'
  }
  console.log("note:", note);
  return async(dispatch) => {
    const data = await fetch(`${baseURL}/tasks/${note.taskId}`, {
      method: 'PUT',
      body: JSON.stringify(tempSchema),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    const json = await data.json()
    console.log("json", json);
    if(data.ok){
      dispatch({
        type: CREATE_NOTE,
        payload: json
      })
    } else {
      throw new Error('Could not create new note')
    }
  }
}
