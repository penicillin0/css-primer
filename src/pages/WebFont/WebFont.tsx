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
      <h3 className="mb-3">
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
        <H5Font fontFamily="ChunkFive">This is ChunkFive Font</H5Font>
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
        <H5Font fontFamily="Gentium Basic">This is Gentium Basic</H5Font>
        <H5Font fontFamily="Gentium Basic">
          <em>This is Gentium Basic Italic</em>
        </H5Font>
      </Demo>
      <p>
        Webフォントを使う場合、全てのフォントフェイスについてフォントファイルを用意し、定義する必要があります。
      </p>
      <p>
        フォントファイルを用意せずにフォントフェイスを適用しようとすると、ブラウザが自動で用意したスタイルになるため注意が必要です。
      </p>
      <h3 className="mt-5 mb-3">
        <b>その他の機能</b>
      </h3>
      <h4>font-stretch</h4>
      <p>
        一部のフォントファミリーでは文字の幅を縮めることができます。幅の狭い順に、以下のようなキーワード値を持ちます。
      </p>
      <SyntaxHighlighter language="css" style={monokai} className="mb-3">
        {`font-stretch: ultra-condensed;
font-stretch: extra-condensed;
font-stretch: condensed;
font-stretch: semi-condensed;
font-stretch: normal;
font-stretch: semi-expanded;
font-stretch: expanded;
font-stretch: extra-expanded;
font-stretch: ultra-expanded;`}
      </SyntaxHighlighter>
      <p>
        ブラウザによって使用方法が若干異なるため注意が必要です。今回はChromeを想定して、@font-face
        に追加してみます。各ブラウザの対応状況は
        <a href="https://developer.mozilla.org/ja/docs/Web/CSS/font-stretch#browser_compatibility">
          こちら
        </a>
        で参照できます。
      </p>
      <p>
        上から、condensed, semi-condensed, normal, semi-expanded, expandedの順。
      </p>
      <Demo>
        <H5Font fontFamily="EncodeSans Condensed">This is EncodeSans</H5Font>
        <H5Font fontFamily="EncodeSans SemiCondensed">
          This is EncodeSans
        </H5Font>
        <H5Font fontFamily="EncodeSans">This is EncodeSans</H5Font>
        <H5Font fontFamily="EncodeSans SemiExpanded">This is EncodeSans</H5Font>
        <H5Font fontFamily="EncodeSans Expanded">This is EncodeSans</H5Font>
      </Demo>
    </div>
  );
};

const H5Font = styled.h5<{ fontFamily: string }>`
  font-family: ${(props) => props.fontFamily}, sans-serif;
`;

const Demo = styled.div`
  background-color: lightyellow;
  padding: 20px 0px 20px 40px;
  margin-bottom: 60px;
`;
