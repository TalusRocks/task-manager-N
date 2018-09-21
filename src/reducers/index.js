const mockTasks = [
  {
    "taskId": "123",
    "title": "something",
    "notes": []
  },
  {
    "taskId": "456",
    "title": "weeeeeee reduxxxx",
    "notes": [
      {
        "noteId": "001",
        "text": "note note note note",
        "status": "ASTATUS"
      },
      {
        "noteId": "002",
        "text": "different note",
        "status": "DIFSTATUS"
      }
    ]
  },
  {
    "taskId": "890",
    "title": "third",
    "notes": [
      {
        "noteId": "003",
        "text": "one note",
        "status": "HELLO"
      }
    ]
  }
]

export default function tasks(state = { tasks: mockTasks }, action) {
  return state
}
