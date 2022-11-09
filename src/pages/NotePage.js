import React from 'react'
import notes from '../assets/data'

// As we added a number to our router, we also need to add a props
const NotePage = ({match}) => {
    let noteID = match.params.id
    // variable that matches the specific ID that we're passing in
    let note = notes.find(note => note.id === Number(noteID))
    console.log('Props', noteID)
    return (
        <div>
        <p>{note.body}</p>
        </div>
    )
}

export default NotePage
