import React from "react";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Demo } from "../../components/Demo";

type Props = {};

export const Text: React.FC<Props> = () => {
  return (
    <>
      <h1 className="my-3">Text</h1>
      <p className="mb-5">テキストモジュールについての機能を見ていきます。</p>
      <h3 className="mb-3">
        <b>テキストの効果</b>
      </h3>
      <h4>text-shadow</h4>
      <p>
        この機能は古くから用意されていましたが、実装が少ないという理由でCSS2.1からは削除されています。
        CSS3から復活し現在は多くのブラウザで実装されています。
      </p>
      <p>
        下のように影の座標とぼかしの半径、色をそれぞれ指定することができます。
      </p>
      <SyntaxHighlighter language="css" style={monokai} className="mb-3">
        {`h5 {
  text-shadow: 1px 5px 10px #BBB;
            /* x軸 y軸  ぼかし 色  */
}`}
      </SyntaxHighlighter>
      <Demo>
        <H5TextShadow>こんにちは</H5TextShadow>
      </Demo>
      <p>
        影は複数指定することもできます。複数の影を指定することで、離れていくほど影の色を濃く表現しています。
      </p>
      <SyntaxHighlighter language="css" style={monokai} className="mb-3">
        {`h5 {
  text-shadow: 0px 1px 1px #eee,
               0px 2px 1px #aaa,
               0px 4px 2px #333;  
}`}
      </SyntaxHighlighter>
      <Demo>
        <H5TextMultipleShadow>こんにちは</H5TextMultipleShadow>
      </Demo>
      <h4>text-overflow</h4>
      <p>
        CSS3から導入されたこのプロパティは、小さい画面などでリンクテキストの折返しを回避するために使われます。
      </p>
      <SyntaxHighlighter language="css" style={monokai} className="mb-3">
        {`p {
  overflow: hidden;
  white-space: nowrap;  
}
p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;  
}`}
      </SyntaxHighlighter>
      <Demo>
        <PNormal style={{ width: "60%", border: "1px solid #888" }}>
          Measuring programming progress by lines of code is like measuring
          aircraft building progress by weight.
        </PNormal>
        <PEllipsis style={{ width: "60%", border: "1px solid #888" }}>
          Measuring programming progress by lines of code is like measuring
          aircraft building progress by weight.
        </PEllipsis>
      </Demo>
      <h4>text-align, text-align-last</h4>
      <p>
        text-alignは古くから存在しますが、start,
        endという値が追加されました。日本語などの左から右に表記される場合についてはright,
        leftと変わりませんが、アラビア語のような右から左に表記される場合に効果を発揮します。
        また、新たなプロパティであるtext-align-lastは最終行の配置のみを指定することができます。
      </p>
      <SyntaxHighlighter language="css" style={monokai} className="mb-3">
        {`p {
  text-align: start;
}
p {
  text-align: end;
}
p {
  text-align: left;
  text-align-last: right;
}`}
      </SyntaxHighlighter>
      <Demo>
        <PTextAlignStart>text-align start</PTextAlignStart>
        <PTextAlignEnd>text-align end</PTextAlignEnd>
        <PTextAlignLastRight
          style={{ width: "267px", border: "1px solid #888" }}
        >
          I have discovered a truly marvellous proof of this, which this margin
          is too narrow to contain. Q.E.D.
        </PTextAlignLastRight>
      </Demo>
      <h4>overflow-wrap ( word-wrap )</h4>
      <p>
        長い単語をどこで改行するかを指定するプロパティです。
        かつてはword-wrapという名称で、現在はoverflow-wrapに改名されていますが、どちらでも動作します。
        normalでは単語間でしか改行しませんが、wrapは単語の途中でも改行します。
      </p>
      <SyntaxHighlighter language="css" style={monokai} className="mb-3">
        {`p {
  overflow-wrap: normal;
}
p {
  overflow-wrap: break-word;
}`}
      </SyntaxHighlighter>
      <Demo>
        <POverflowWrapNormal
          style={{ width: "240px", border: "1px solid #888" }}
        >
          pneumonoultramicroscopicsilicovolcanoconiosis is a chronic lung
          disease caused by the inhalation of fine silicate or quartz dust.
        </POverflowWrapNormal>
        <POverflowWrapBreakWord
          style={{ width: "240px", border: "1px solid #888" }}
        >
          pneumonoultramicroscopicsilicovolcanoconiosis is a chronic lung
          disease caused by the inhalation of fine silicate or quartz dust.
        </POverflowWrapBreakWord>
      </Demo>
      <h4>hyphens</h4>
      <p>
        単語分割時にハイフン区切りするためのプロパティです。$shy;としてもハイフンを挿入することはできますが、いちいち追加するのは困難です。
        ただし、このプロパティはブラウザによって
        <a href="https://developer.mozilla.org/ja/docs/Web/CSS/hyphens#browser_compatibility">
          対応状況
        </a>
        が様々です。Chromeの場合はhtmlダグのlang属性をenとした場合には有効です。
      </p>
      <SyntaxHighlighter language="css" style={monokai} className="mb-3">
        {`p {
  hyphens: auto;
}
p {
  hyphens: none;
}`}
      </SyntaxHighlighter>
      <div lang="en">
        <Demo>
          <PHyphensAuto style={{ width: "180px", border: "1px solid #888" }}>
            The word "floccinaucinihilipilification" means "the estimation of
            something as worthless". It's an 18th-century coinage that combines
            four Latin prefixes meaning "nothing".
          </PHyphensAuto>
          <PHyphensNone style={{ width: "180px", border: "1px solid #888" }}>
            The word "floccinaucinihilipilification" means "the estimation of
            something as worthless". It's an 18th-century coinage that combines
            four Latin prefixes meaning "nothing".
          </PHyphensNone>
        </Demo>
      </div>

      <h4>resize</h4>
      <p>
        このプロパティは、要素の大きさを変更することができます。値によって伸縮の方向を制限することができます。
      </p>
      <SyntaxHighlighter language="css" style={monokai} className="mb-3">
        {`p {
  resize: none;
  overflow: hidden;
}
p {
  resize: horizontal;
  overflow: hidden;
}
p {
  resize: vertical;
  overflow: hidden;
}
p {
  resize: both;
  overflow: hidden;
}`}
      </SyntaxHighlighter>
      <Demo>
        <PResizeNone style={{ width: "250px", border: "1px solid #888" }}>
          We have a generational challenge, to not only create new jobs but
          create a renewed sense of purpose.
        </PResizeNone>
        <PResizeHorizontal
          style={{ width: "400px", height: "42px", border: "1px solid #888" }}
        >
          We have a generational challenge, to not only create new jobs but
          create a renewed sense of purpose.
        </PResizeHorizontal>
        <PResizeVertical
          style={{ width: "100px", height: "150px", border: "1px solid #888" }}
        >
          We have a generational challenge, to not only create new jobs but
          create a renewed sense of purpose.
        </PResizeVertical>
        <PResizeBoth
          style={{ width: "120px", height: "120px", border: "1px solid #888" }}
        >
          We have a generational challenge, to not only create new jobs but
          create a renewed sense of purpose.
        </PResizeBoth>
      </Demo>
    </>
  );
};

const H5TextShadow = styled.h4`
  text-shadow: 1px 5px 2px #bbb;
`;

const H5TextMultipleShadow = styled.h4`
  text-shadow: 0px 1px 1px #eee, 0px 2px 1px #aaa, 0px 4px 2px #333;
`;

const PNormal = styled.p`
  overflow: hidden;
  white-space: nowrap;
`;

const PEllipsis = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const PTextAlignStart = styled.p`
  text-align: start;
`;

const PTextAlignEnd = styled.p`
  text-align: end;
`;

const PTextAlignLastRight = styled.p`
  text-align: left;
  text-align-last: right;
`;

const POverflowWrapNormal = styled.p`
  overflow-wrap: normal;
`;

const POverflowWrapBreakWord = styled.p`
  overflow-wrap: break-word;
`;

const PHyphensAuto = styled.p`
  hyphens: auto;
`;

const PHyphensNone = styled.p`
  hyphens: none;
`;

const PResizeNone = styled.p`
  overflow: hidden;
  resize: none;
`;

const PResizeHorizontal = styled.p`
  overflow: hidden;
  resize: horizontal;
`;

const PResizeVertical = styled.p`
  overflow: hidden;
  resize: vertical;
`;

const PResizeBoth = styled.p`
  resize: both;
  overflow: hidden;
`;
