import React from "react";
import { Heading } from "@chakra-ui/react";
function Header({ name }) {
  return (
    <Heading noOfLines={1} textAlign="center" mb="10px">
      Welcome {name} !!
    </Heading>
  );w
}

export default Header;
