import React from "react";
import { addTodos,getTodos } from "../features/api";
import { useState } from "react";
import { Input, InputGroup, Button, InputRightAddon } from "@chakra-ui/react";
function TodoForm({ setTodos, todos }) {
  const [content, setContent] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    data = data.get("content");
    await addTodos({ content: data, isCompleted: false });
    getTodos().then((data) => setTodos(data));
    // setTodos([...todos, { content: data, isCompleted: false,id : todos.length + 1 }]);
    setContent("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          type="text"
          name="content"
          onChange={(e) => setContent(e.target.value)}
          minLength={3}
          value={content}
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
  );
}

export default TodoForm;
