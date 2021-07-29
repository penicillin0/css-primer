import React from "react";
import { Link } from "react-router-dom";

type Props = {};

export const LandingPage: React.FC<Props> = () => {
  return (
    <div>
      <h1 className="my-4">Welcome to CSS primer</h1>
      <div className="mx-4">
        <h2>Pages</h2>
        <li>
          <Link to="/webfont">Web font</Link>
        </li>
      </div>
    </div>
  );
};
