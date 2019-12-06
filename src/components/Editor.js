import React, { useContext } from "react";
import styled from "styled-components";
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

const Editor = () => {
  const { emmet, setEmmet } = useContext(EmmetContext);

  return (
    <StyledTextarea
      onChange={({ target }) => setEmmet(target.value)}
      value={emmet}
    />
  );
};

export default Editor;
