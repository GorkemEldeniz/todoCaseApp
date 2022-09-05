import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import { Heading } from "@chakra-ui/react";
function Login() {
  return (
    <div className="Login">
      <Heading noOfLines={1}>Todo App</Heading>
      <Form />
    </div>
  );
}

export default Login;
