import React from 'react'
import Note from './Note'

const NoteList = props => {
  return (
    <div>
      {props.notes.map(note => {
        return <Note key={note.noteId}
          id={note.noteId}
          text={note.text}
          status={note.status}
          taskId={props.taskId}
          onDeleteNote={props.onDeleteNote}
          />
      })}
    </div>
  )
}

export default NoteList
