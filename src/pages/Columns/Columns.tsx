import React from "react";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Demo } from "../../components/Demo";

type Props = {};

export const Columns: React.FC<Props> = () => {
  return (
    <>
      <h1 className="my-3">Columns</h1>
      <p className="mb-5">
        ここでは、文章などの段組みの機能について見ていきます。
      </p>
      <h3 className="mb-3">
        <b>カラムのレイアウト</b>
      </h3>
    </>
  );
};
