import React, { useContext } from "react";
import styled from "styled-components";
import Example from "./Example";
import { EmmetContext } from "./../hooks/useEmmet";

const StyledTextarea = styled.textarea`
  --text-size: 1.2rem;
  --text-height: 1.4rem;

  background-color: #282c34;
  border-radius: 5px;
  box-sizing: border-box;
  color: #fff;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.2rem;
  line-height: 1.4rem;
  height: calc(var(--text-size) * 3 + 1rem);
  min-height: calc(var(--text-size) + var(--text-height));
  padding: 1rem;
  resize: vertical;
  width: 100%;
`;

const Editor = props => {
  const { emmet, setEmmet } = useContext(EmmetContext);

  const examples = [
    "ul>li*5{Item $$$}.item.item--$$$",
    "div+div>p>span+em^^bq",
    "a:link",
    "html:5",
    "div>(header>ul>li*2>a)+footer>p"
  ];

  return (
    <div {...props}>
      <h2>Input (editable!)</h2>
      <StyledTextarea
        onChange={({ target }) => setEmmet(target.value)}
        value={emmet}
      />
      <h3>Examples:</h3>
      <div>
        {examples.map(ex => (
          <Example onClick={() => setEmmet(ex)}>{ex}</Example>
        ))}
      </div>
    </div>
  );
};

export default Editor;
