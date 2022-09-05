import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
  return (
    <nav className='nav-bar'>
        <NavLink to='posts'>Home</NavLink>
        <NavLink to="add">Add</NavLink>
        <NavLink to="update">Update</NavLink>
    </nav>
  )
}

export default Nav