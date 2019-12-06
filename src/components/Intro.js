import React from "react";

const Intro = props => (
  <p {...props}>
    Emmet is a powerful tool for expanding short CSS-like snippets of text, into
    code that would take longer to write by hand. It's pre-installed in every
    version of VS Code and Atom*, and yet can easily go unnoticed. Try editing
    inside the box below, and see what Emmet returns.{" "}
    <a href="https://docs.emmet.io/cheat-sheet/">
      Here's an extensive cheatsheet
    </a>{" "}
    that shows everything Emmet can expand.
  </p>
);

export default Intro;
