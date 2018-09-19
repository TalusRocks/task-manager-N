import React from 'react'
import Note from './Note'

const NoteList = props => {
  return (
    <div>
      {props.notes.map(note => {
        return <Note key={note.noteId} text={note.text} status={note.status}/>
      })}
    </div>
  )
}

export default NoteList
