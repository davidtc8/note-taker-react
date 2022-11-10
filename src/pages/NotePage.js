import React from 'react'
import notes from '../assets/data'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

// As we added a number to our router, we also need to add a props
const NotePage = ({match}) => {
    let noteID = match.params.id
    // variable that matches the specific ID that we're passing in
    let note = notes.find(note => note.id === Number(noteID))
    console.log('Props', noteID)
    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <Link to='/'>
                        <ArrowLeft />
                    </Link>
                </h3>
            </div>

            <textarea value={note?.body}>

            </textarea>
        </div>
    )
}

export default NotePage
