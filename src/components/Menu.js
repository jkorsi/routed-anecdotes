import React from 'react'

import {Link} from "react-router-dom"

const Menu = (props) =>
{
  const padding = {
    paddingRight: 5
  }
  return (
    <div>
      <Link style={padding} to={props.anecdoteLink}>Anecdotes</Link>
      <Link style={padding} to={props.createNewLink}>Create New</Link>
      <Link style={padding} to={props.aboutLink}>About</Link>
    </div>
  )
}

export default Menu
