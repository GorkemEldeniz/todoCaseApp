import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
function Nav() {
  return (
    <nav className="nav-bar">
      <ChakraLink>
        <Link to="/">
          Home   
          <i className="fa-solid fa-house-user"></i>
        </Link>
      </ChakraLink>
    </nav>
  )
}

export default Nav
