import React from 'react'
import { addTodos, getTodos } from '../features/api'
import { useState } from 'react'
import {
  Input,
  InputGroup,
  Button,
  InputRightAddon,
  FormControl,
  FormHelperText,
} from '@chakra-ui/react'
function TodoForm({ setTodos, todos }) {
  const [content, setContent] = useState('')
  const [error, setError] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = new FormData(e.target)
    data = data.get('content')
    // setTodos([...todos, { content: data, isCompleted: false,id : todos.length + 1 }]);
    await addTodos({ content: data, isCompleted: false })
    getTodos().then((data) => setTodos(data))
    setContent('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          type="text"
          name="content"
          onInput={(e) => setContent(e.target.value)}
          value={content}
          minLength="3"
          paddingInline="10px"
          width="100%"
        />
        <InputRightAddon>
          <Button type="submit">
            <i className="fa-solid fa-plus"></i>
          </Button>
        </InputRightAddon>
      </InputGroup>
    </form>
  )
}

export default TodoForm
