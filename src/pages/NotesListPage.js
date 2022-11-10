import React, { useState, useEffect } from 'react'
//import notes from '../assets/data'
import Listitem from '../components/Listitem'
import AddButton from '../components/AddButton'

const NotesListPage = () => {
  // useState is going to return an array
  let [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes()
    // We're adding this array of dependencies at the end "[]"
    // so that we don't have so many requests call in the website
  }, [])

  let getNotes = async()=> {
    let response = await fetch('http://localhost:8000/notes/')
    let data = await response.json()
    setNotes(data)
  }

  return (
    <div className= 'notes'>
      <div className= 'notes-header'>
        <h2 className='notes-title'>&#9782; Notes</h2>
        {/* Counter for the notes that we have+
        
        ñ*/}
        <p className='notes-count'>{notes.length}</p>
      </div>
      <div className= 'notes-list'>
          {notes.map((note, index) => (
              <Listitem key={index} note= {note}/>
            ))}
      </div>

      <AddButton/>
    </div>
  )
}

export default NotesListPage
