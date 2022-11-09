import React from 'react'
import {Link} from 'react-router-dom'

// props = data that we can update
const Listitem = ({note}) => {
  return (
    <Link to={`/note/${note.id}`}>
        <h3>{note.body}</h3>
    </Link>
  )
}

export default Listitem
