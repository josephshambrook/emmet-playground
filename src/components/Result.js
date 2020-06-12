import React, { useContext, useState, useEffect } from "react";
import expand from "emmet";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";
import { EmmetContext } from "./../hooks/useEmmet";

const Container = styled.div`
  > pre {
    border-radius: 5px;
    margin: 0;
    overflow-x: auto;
    padding: 1rem;
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
    <Container>
      <h2>Output</h2>
      {invalid ? (
        <div>The text you've added is invalid!</div>
      ) : (
        <Highlight
          {...defaultProps}
          theme={vsDark}
          code={result}
          language="markup"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      )}
    </Container>
  );
};

export default Result;
