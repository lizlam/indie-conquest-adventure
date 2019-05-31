import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Viewer from "./Viewer";
import Inventory from "./Inventory";
import StoryTree from "./StoryTree";
import ErrorBoundary from "./ErrorBoundary";

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
const treasure = "$";
const mushroom = "🍄";

function App() {
  const [index, setIndex] = useState(0);
  const [inventory, setInventory] = useState([pick, rook]);
  const [audio, setAudio] = useState(false);

  useEffect(() => {
    if (audio) {
      document.querySelector(".audio").pause();
      document.querySelector(".audio").load();
      document.querySelector(".audio").play();
    }
  });

  const clickAddHandler = () => {
    if (StoryTree[index].add) {
      let item = eval(StoryTree[index].add);
      setInventory([...inventory, item]);
    }
    console.log(StoryTree[index].minus);
    if (StoryTree[index].minus) {
      let removedItem = eval(StoryTree[index].minus);
      console.log(removedItem);
      let i = inventory.indexOf(removedItem);
      console.log(i);
      setInventory(
        ...inventory.splice(0, 1),
        ...inventory.splice(i, inventory.length)
      );
    }
    setIndex(index + 1);
  };

  return (
    <div>
      <Frame>
        <Viewer
          title={StoryTree[index].title}
          text={StoryTree[index].text}
          image={StoryTree[index].image}
        />
        {StoryTree[index].choice1 && (
          <Button onClick={() => clickAddHandler()}>
            {StoryTree[index].choice1}
          </Button>
        )}
        {StoryTree[index].choice2 && (
          <Button onClick={() => setIndex(index + 2)}>
            {StoryTree[index].choice2}
          </Button>
        )}
        {!StoryTree[index].choice1 && (
          <Button
            onClick={() => {
              setIndex(0);
              setInventory([pick, rook]);
            }}
          >
            Start Over
          </Button>
        )}
      </Frame>
      <Inventory>{inventory}</Inventory>
      <Button onClick={() => setAudio(!audio)}>
        {" "}
        Sound {audio ? "off" : "on"}
      </Button>
      {audio && (
        <audio autoPlay className="audio">
          <source src={StoryTree[index].music} />
        </audio>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ErrorBoundary>
    <App />{" "}
  </ErrorBoundary>,
  rootElement
);
