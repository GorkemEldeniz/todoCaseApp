import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import { Input, Button, InputGroup, InputRightAddon } from "@chakra-ui/react";
function Form() {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const handle = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    dispatch(login(data.get("username")));
    navigator("/");
  };

  return (
    <form onSubmit={handle}>
      <InputGroup>
        <Input type="text" name="username" autoComplete="off" maxLength={20} />
        <InputRightAddon>
          <Button type="submit">Login</Button>
        </InputRightAddon>
      </InputGroup>
    </form>
  );
}

export default Form;
