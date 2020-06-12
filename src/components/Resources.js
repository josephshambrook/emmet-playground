import React from "react";
import styled from "styled-components";

const Margined = styled.div`
  margin-bottom: 0.5rem;
`;

const links = [
  {
    href: "https://docs.emmet.io/cheat-sheet/",
    text: "Emmet cheatsheet"
  },
  {
    href:
      "https://medium.com/@eshwaren/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c",
    text: "How to enable Emmet for JSX in VSCode"
  },
  {
    href: "https://atom.io/packages/emmet",
    text: "How to enable Emmet in Atom"
  },
  {
    href: "https://github.com/josephshambrook/emmet-playground",
    text: "Code for this web app on GitHub"
  }
];

const Resources = (props) => (
  <div {...props}>
    <h2>Resources</h2>
    {links.map(({ href, text }) => (
      <Margined>
        <a href={href}>{text}</a>
      </Margined>
    ))}
  </div>
);

export default Resources;
