import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Intro from "./Intro";
import Editor from "./Editor";
import Result from "./Result";

import "normalize.css";

const Global = createGlobalStyle`
  body {
    color: #111;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 18px;
    line-height: 1.4;
    padding: 2rem 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Barlow", Helvetica, Arial, sans-serif;
    line-height: 1.12;
  }
`;

const Grid = styled.main`
  display: grid;
  grid-gap: 1.5rem;
  /* grid-template-rows: min-content 1fr min-content 1fr; */
  min-height: 100vh;
  min-width: 0;

  > * {
    margin: 0;
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(3, min-content);
  }
`;

function App() {
  return (
    <Grid>
      <Global />
      <h1>Emmet Playground</h1>
      <Intro />
      <Editor />
      <h1>Result</h1>
      <Result />
      <h3>To do:</h3>
      <ul>
        <li>Add clickable example Emmet snippets</li>
        <li>Add "What is Emmet?" link</li>
      </ul>
    </Grid>
  );
}

export default App;
