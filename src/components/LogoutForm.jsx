import React from 'react'
import { Button } from '@chakra-ui/react'
import { logout } from '../features/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function LogoutForm() {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const handleClick = () => {
    dispatch(logout())
    navigator('/')
  }
  return (
    <div className="logout">
      <Button onClick={handleClick}>Logout</Button>
    </div>
  )
}

export default LogoutForm
