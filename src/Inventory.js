import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Box = styled.span`
  width: 200px;
  height: 30px;
  margin-left: 5em;
  padding: 10px;
  border: 1px solid white;
  font-size: 20px;
`;
const Inventory = props => {
  return <Box>Inventory: {props.children}</Box>;
};

export default Inventory;
