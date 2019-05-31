import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import styled from "styled-components";

import { keyFrameTitleText, keyFrameFadeIn } from "./KeyFrames";

const ResponseText = styled.div`
  font-size: 2em;
  color: white;
`;

let Image = styled.div`
  animation: ${keyFrameFadeIn} 5s ease-in-out 1s;
`;
let Title = styled.div`
  font-size: 35px;
  margin-left: 15px;
  animation: ${keyFrameTitleText} 2s ease-in-out 1s;
`;

const Text = styled.div`
  margin-left: 15px;
`;

const QuestionText = styled.div`
  margin-left: 15px;
`;
const Viewer = props => {
  useEffect(() => {
    document.title = `${props.title}`;
  });

  useEffect(() => {
    Image = styled.div`
      animation: ${keyFrameFadeIn} 5s ease-in-out 0s;
    `;
    Title = styled.div`
      font-size: 35px;
      margin-left: 15px;
      animation: ${keyFrameTitleText} 2s ease-in-out 0s;
    `;
  }, [props.title]);

  return (
    <Container fluid>
      <Card>
        <Image>
          <CardImg top width="50%" src={props.image} />
        </Image>
        <CardBody>
          <Title>
            <CardTitle>{props.title}</CardTitle>
          </Title>
          <Text>
            <CardText>{props.text}</CardText>
          </Text>
          <QuestionText>
            <CardSubtitle>What do you want to do?</CardSubtitle>
          </QuestionText>
          <ResponseText />
        </CardBody>
      </Card>
    </Container>
  );
};

export default Viewer;
