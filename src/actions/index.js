export const FETCH_DB_TASKS = 'FETCH_DB_TASKS'
export const GET_ONE_TASK = 'GET_ONE_TASK'
export const CREATE_TASK = 'CREATE_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const CREATE_NOTE = 'CREATE_NOTE'
export const DELETE_NOTE= 'DELETE_NOTE'

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
  // note = {text: "string", status: "string", taskId: "string"}
  let tempSchema = {
    noteId: '',
    text: note.text,
    status: note.status
  }

  return async(dispatch) => {
    const data = await fetch(`${baseURL}/tasks/${note.taskId}/notes`, {
      method: 'PUT',
      body: JSON.stringify(tempSchema),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    const json = await data.json()
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

async function getOneTask(taskId, noteId) {
    const data = await fetch(`${baseURL}/tasks/${taskId}`)
    const json = await data.json()
    for (let i = 0; i < json.notes.length; i++) {
      if (json.notes[i].noteId === noteId) {
        json.notes.splice(i, 1)
      }
    }
    return json
}

export function deleteNote(taskId, noteId) {
  return async(dispatch) => {
    let oneTask = await getOneTask(taskId, noteId)
    const data = await fetch(`${baseURL}/tasks/${taskId}`, {
      method: 'PUT',
      body: JSON.stringify(oneTask),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    const json = await data.json()
    if(data.ok){
      dispatch({
        type: DELETE_NOTE,
        payload: json
      })
    } else {
      throw new Error('Could not delete note')
    }
  }
}
