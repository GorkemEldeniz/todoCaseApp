import React from 'react'
import Nav from '../components/Nav'
import { Heading } from '@chakra-ui/react'
function NotFound() {
  return (
    <div className="not-found">
      <Heading size="4xl">Page Not Found</Heading>
      <Nav />
    </div>
  )
}

export default NotFound
