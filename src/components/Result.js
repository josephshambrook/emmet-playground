import React, { useContext, useState, useEffect } from "react";
import expand from "emmet";
import styled from "styled-components";
import Highlight from "react-highlight";
import { EmmetContext } from "./../hooks/useEmmet";

const NoMargin = styled.div`
  > pre {
    margin: 0;
  }
`;

const Result = () => {
  const { emmet } = useContext(EmmetContext);
  const [result, setResult] = useState("");
  const [invalid, setInvalid] = useState(false);
  const emmetOptions = {
    options: {
      "output.indent": "  "
    }
  };

  useEffect(() => {
    try {
      setResult(expand(emmet, emmetOptions));
      setInvalid(false);
    } catch (e) {
      setInvalid(true);
    }
  }, [emmet, emmetOptions]);

  return (
    <NoMargin>
      <h2>Output</h2>
      {invalid ? (
        <div>The text you've added is invalid!</div>
      ) : (
        <Highlight language="html">{result}</Highlight>
      )}
    </NoMargin>
  );
};

export default Result;
