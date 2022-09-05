import React from "react";
import { useEffect, useState } from "react";
import { deleteTodos, getTodos, updateTodo } from "../features/api";
import Header from "./Header";
import Loader from "./Loader";
import LogoutForm from "./LogoutForm";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  Input,
  InputGroup,
  InputRightAddon,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import TodoForm from "./TodoForm";
import { animate } from "framer-motion";
function Todo() {
  const [todos, setTodos] = useState([]);
  const name = JSON.parse(localStorage.getItem("username"));
  const [loading, setLoading] = useState(true);
  const [editContent, setEditContent] = useState("");
  const [parent] = useAutoAnimate();
  useEffect(() => {
    getTodos()
      .then((data) => setTodos(data))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = (id) => {
    setTodos((pre) => pre.filter((el) => el.id != id));
    deleteTodos(id);
  };

  const handleChange = (id, e) => {
    setTodos((pre) =>
      pre.map((el) => {
        if (el.id == id) {
          return { ...el, isCompleted: e.target.checked };
        }
        return el;
      })
    );
    updateTodo({ isCompleted: e.target.checked }, id);
  };

  const handleEdit = (id, e) => {
    setTodos((pre) =>
      pre.map((el) => {
        if (el.id == id) {
          return { ...el, content: e.target.value };
        }
        return el;
      })
    );
  };
  const focusEdit = (e) => {
    let inputElement;
    if (e.target.tagName == "I") {
      inputElement = e.target.parentElement.parentElement.previousSibling;
    } else {
      inputElement = e.target.parentElement.previousSibling;
    }
    inputElement.focus();
    inputElement.readOnly = false;
  };

  const handleInput = (e, id) => {
    if (e.key == "Enter") {
      e.target.readOnly = true;
      //prevent many request to API by keydown event!!
      updateTodo({ content: e.target.value }, id);
    }
  };

  if (loading) return <Loader />;
  return (
    <div className="todo">
      <Header name={name} />
      <LogoutForm />
      <TodoForm setTodos={setTodos} todos={todos} />
      <br />
      <div className="todos" ref={parent}>
        {todos.map((todo, index) => (
          <InputGroup key={index}>
            <Input
              value={todo.content}
              readOnly={true}
              onKeyDown={(e) => handleInput(e, todo.id)}
              onInput={(e) => handleEdit(todo.id, e)}
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
            />
            <InputRightAddon>
              <Checkbox
                onChange={(e) => handleChange(todo.id, e)}
                defaultChecked={todo.isCompleted}
              />
              <Button onClick={() => handleDelete(todo.id)}>
                <i className="fa-solid fa-trash"></i>
              </Button>
              <Button onClick={(e) => focusEdit(e)}>
                <i className="fa-solid fa-pen-to-square"></i>
              </Button>
            </InputRightAddon>
          </InputGroup>
        ))}
      </div>
    </div>
  );
}

export default Todo;
