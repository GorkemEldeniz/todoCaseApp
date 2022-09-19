import React, { useState } from 'react'
import { Button,useColorMode } from '@chakra-ui/react'
function Theme() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button onClick={toggleColorMode}>
      {colorMode == 'dark' ? (
        <i className="fa-solid fa-moon"></i>
      ) : (
        <i className="fa-solid fa-sun"></i>
      )}
    </Button>
  )
}

export default Theme
