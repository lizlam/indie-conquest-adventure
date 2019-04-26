import React, { useState } from "react";
import ReactDOM from "react-dom";
import Viewer from "./Viewer";
import Inventory from "./Inventory";
import StoryTree from "./StoryTree";
import styled from "styled-components";

import "./styles.css";

const Frame = styled.div`
  border: 1px solid white;
  margin: 50px;
  padding: 30px;
  width: 50%;
`;
const Button = styled.button`
  border-color: grey;
  background-color: black;
  color: white;
  font-size: 18px;
  padding: 15px;
  margin: 15px;
  &:hover {
    border-color: red;
    color: red;
  }
`;

const pick = "⛏";
const rook = "♜";
const mushroom = "🍄";

function App() {
  const [index, setIndex] = useState(0);
  const [inventory, setInventory] = useState([pick, rook]);
  return (
    <div>
      <Frame>
        <Viewer
          title={StoryTree[index].title}
          text={StoryTree[index].text}
          image={StoryTree[index].image}
          music={StoryTree[index].music}
        />
        {StoryTree[index].choice1 && (
          <Button
            onClick={() => setIndex(index + 1) && setInventory([mushroom])}
          >
            {StoryTree[index].choice1}
          </Button>
        )}
        {StoryTree[index].choice2 && (
          <Button onClick={() => setIndex(index + 2)}>
            {StoryTree[index].choice2}
          </Button>
        )}
        {!StoryTree[index].choice1 && (
          <Button onClick={() => setIndex(0)}>Start Over</Button>
        )}
      </Frame>
      {StoryTree[index].add}
      <Inventory>{inventory}</Inventory>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
