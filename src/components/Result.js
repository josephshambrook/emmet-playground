import React, { useContext, useState, useEffect } from "react";
import expand from "emmet";
import Highlight from "react-highlight";
import { EmmetContext } from "./../hooks/useEmmet";

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

  if (invalid) {
    return <div>The text you've added is invalid!</div>;
  }

  return <Highlight language="html">{result}</Highlight>;
};

export default Result;
