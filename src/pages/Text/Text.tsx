import React from "react";
import styled from "styled-components";

type Props = {};

export const Text: React.FC<Props> = () => {
  return (
    <>
      <h1 className="my-3">Text</h1>
      <p className="mb-5">テキストモジュールについての機能を見ていきます。</p>
      <h3 className="mb-3">
        <b>text-shadow</b>
      </h3>
      <p>
        この機能は古くから用意されていましたが、実装が少ないという理由でCSS2.1からは削除されています。
        CSS3から復活し現在は多くのブラウザで実装されいます。
      </p>
    </>
  );
};
