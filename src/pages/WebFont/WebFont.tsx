import React from "react";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {};

export const WebFont: React.FC<Props> = () => {
  return (
    <div>
      <h1 className="my-3">WebFont</h1>
      <p className="mb-5">ここではWebフォントを使って文字を表示します。</p>
      <h3>
        <b>Web フォントを定義する</b>
      </h3>
      <h4>@font-face</h4>
      <p>@font-faceというルール使ってフォントを定義することができます。</p>

      <SyntaxHighlighter language="css" style={monokai} className="mb-3">
        {`@font-face {
  font-family: "ChunkFive";
  src: url(./fonts/ChunkFive.woff) format("woff");
}`}
      </SyntaxHighlighter>
      <Demo>
        <h5>This is Basic Font</h5>
        <H5ChunkFive>This is ChunkFive Font</H5ChunkFive>
      </Demo>
      <p>
        複数のフォントフェイスを定義することも可能です。例えば斜体のフォントを定義してみましょう。
      </p>
      <SyntaxHighlighter language="css" style={monokai} className="mb-3">
        {`/* 通常のフォントの定義 */
@font-face {
  font-family: "Gentium Basic";
  src: url(./fonts/GentiumBasic-Regular.ttf) format("truetype");
}

/* 斜体(Italic)フォントの定義 */
@font-face {
  font-family: "Gentium Basic";
  font-style: italic;
  src: url(./fonts/GentiumBasic-Italic.ttf) format("truetype");
}`}
      </SyntaxHighlighter>
      <p>
        このとき、斜体フォントのための定義は必要なく、マークアップのみで適用できます。
      </p>
      <SyntaxHighlighter language="html" style={monokai} className="mb-3">
        {`<h5>This is Gentium Basic</h5>
<h5>
  <em>This is Gentium Basic Italic</em>
</h5>`}
      </SyntaxHighlighter>
      <Demo>
        <H5GentiumBasic>This is Gentium Basic</H5GentiumBasic>
        <H5GentiumBasic>
          <em>This is Gentium Basic Italic</em>
        </H5GentiumBasic>
      </Demo>
      <p>
        Webフォントを使う場合、全てのフォントフェイスについてフォントファイルを用意し、定義する必要があります。
      </p>
      <p>
        フォントファイルを用意せずにフォントフェイスを適用しようとすると、ブラウザが自動で用意したスタイルになるため注意が必要です。
      </p>
    </div>
  );
};

const H5ChunkFive = styled.h5`
  font-family: ChunkFive;
`;

const H5GentiumBasic = styled.h5`
  font-family: "Gentium Basic";
`;

const Demo = styled.div`
  background-color: lightyellow;
  padding: 20px 0px 20px 40px;
  margin-bottom: 60px;
`;
