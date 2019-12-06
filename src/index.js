import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { EmmetContext } from "./hooks/useEmmet";

const Wrap = () => {
  const initial = `div.a-class#an-id{Edit me!}`;
  const [emmet, setEmmet] = React.useState(initial);

  return (
    <EmmetContext.Provider value={{ emmet, setEmmet }}>
      <App />
    </EmmetContext.Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Wrap />, rootElement);
