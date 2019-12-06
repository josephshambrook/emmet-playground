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
  /* grid-template-rows: min-content 1fr min-content 1fr; */
  min-height: 100vh;
  min-width: 0;

  > * {
    margin: 0;
  }

  > * + * {
    margin-top: 1.5rem;
  }

  > [data-area="header"] {
    grid-area: header;
  }

  > [data-area="intro"] {
    grid-area: intro;
  }

  > [data-area="input"] {
    grid-area: input;
  }

  > [data-area="output"] {
    grid-area: output;
  }

  > [data-area="more"] {
    grid-area: more;
  }

  @media screen and (min-width: 800px) {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-areas:
      "header header"
      "intro intro"
      "input output"
      "more more";
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(3, min-content);
  }
`;

function App() {
  return (
    <Grid>
      <Global />
      <h1 data-area="header">Emmet Playground</h1>
      <Intro data-area="intro" />
      <Editor data-area="input" />
      <Result data-area="output" />
      <div>
        <h2>Resources:</h2>
        <a href="https://docs.emmet.io/cheat-sheet/">Emmet cheatsheet</a>
      </div>
    </Grid>
  );
}

export default App;
