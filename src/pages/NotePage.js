import React, {useState, useEffect} from 'react'
//import notes from '../assets/data'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

// As we added a number to our router, we also need to add a props
const NotePage = ({match, history}) => {
    let noteID = match.params.id
    // variable that matches the specific ID that we're passing in
    //let note = notes.find(note => note.id === Number(noteID))
    let [note, setNote] = useState(null)
    useEffect(() => {
        getNote()
    }, [noteID])

    let getNote = async() => {
        if(noteID === 'new') return
        let response = await fetch(`http://localhost:8000/notes/${noteID}`)
        let data = await response.json()
        setNote(data)
    }

    let createNote = async() => {
        await fetch(`http://localhost:8000/notes/`, {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({...note, 'updated': new Date() })
        })
    }

    // This will fire a put method on the backend, it'll send the object, therefore updating it
    let updateNote = async() => {
        await fetch(`http://localhost:8000/notes/${noteID}`, {
            method: 'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({...note, 'updated': new Date() })
        })
    }

    let deleteNote = async() => {
        await fetch(`http://localhost:8000/notes/${noteID}`, {
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({note})
        })
        history.push('/')
    }

    let handleSubmit = () => {
        if(noteID !== 'new' && !note.body) {
            deleteNote()
        } else if(noteID !== 'new'){
            updateNote()
        } else if(noteID === 'new' && note !== null){
            createNote()
        }
        updateNote()
        history.push('/')
    }

    console.log('Props', noteID)
    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <Link to='/'>
                        <ArrowLeft onClick={handleSubmit} />
                    </Link>
                </h3>

                {/* If the noteID is not new */}
                {/* If statement inside the react function */}
                {noteID !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ): (
                    <button onClick={handleSubmit}>Done</button>
                )}
            </div>

            {/* It needs to be like this, because, if you don't put the (e)
                it'll trigger automatically, and we need for it to wait.
                
                We will also update the actual note, and more specifically the body
                and the value to that body is e.target.value*/}
            <textarea onChange={(e) => {setNote({...note, 'body': e.target.value})}} value={note?.body}>

            </textarea>
        </div>
    )
}

export default NotePage
