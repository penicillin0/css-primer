import React from "react";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {};

const cssCode = `span:before {
             content: "Hello"
}
span:after {
            content: "World"
}`;

export const LandingPage: React.FC<Props> = () => {
  return (
    <div>
      <h1 className="my-4">Welcome to CSS primer</h1>
      <SyntaxHighlighter language="css" style={monokai}>
        {cssCode}
      </SyntaxHighlighter>
      <div className="mx-4">
        <h2>Pages</h2>
        <li>
          <Link to="/webfont">Web font</Link>
        </li>
      </div>
    </div>
  );
};
