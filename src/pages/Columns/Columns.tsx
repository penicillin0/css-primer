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
      <h4>column-count</h4>
      <p>等分したカラムに分けるシンプルな方法です。</p>
      <SyntaxHighlighter language="css" style={monokai} className="mb-3">
        {`div {
  column-count: 2;
}
div {
  column-count: 3;
}`}
      </SyntaxHighlighter>
      <Demo>
        <DivColumnCount columnNum={2}>
          祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。
          遠く異朝をとぶらへば、秦の趙高、漢の王莽、梁の朱忌、唐の祿山、これらは皆舊主先皇の政にもしたがはず、樂しみをきはめ、諌めをも思ひ入れず、天下の亂れん事を悟らずして、民間の愁ふるところを知らざつしかば、久しからずして、亡じにし者どもなり。
          近く本朝をうかがふに、承平の將門、天慶の純友、康和の義親、平治の信賴、これらはおごれる心もたけき事も、皆とりどりにこそありしかども、まぢかくは六波羅の入道、前太政大臣平朝臣清盛公と申しし人のありさま、傳へ承るこそ心もことばも及ばれね。
          その先祖を尋ぬれば桓武天皇第五の皇子、一品式部卿葛原親王九代の後胤、讃岐守正盛が孫、刑部卿忠盛朝臣の嫡男なり。かの親王の御子、高見王、無官無位にして失せ給ひぬ。その御子、高望王の時、初めて平の姓を賜はつて、上総介に成り給ひしより、たちまちに王氏を出でて人臣に列なる、その子鎮守府将軍良望、後には國香と改む。國香より正盛に至る六代は、諸国の受領たりしかども、殿上の仙籍をば未だ赦されず。
        </DivColumnCount>
        <br />
        <DivColumnCount columnNum={3}>
          春はあけぼの。やうやう白くなりゆく山ぎは、すこしあかりて、紫だちたる
          雲のほそくたなびきたる。
          夏は夜。月のころはさらなり。やみもなほ、蛍の多く飛びちがひたる。また、ただ一つ二つなど、ほのかにうち光りて行くもをかし。雨など降るもをかし。
          秋は夕暮れ。夕日のさして山の端いと近うなりたるに、烏の寝どころへ行くとて、三つ四つ、二つ三つなど、飛びいそぐさへあはれなり。まいて雁などのつらねたるが、いと小さく見ゆるはいとをかし。日入りはてて、風の音、虫の
          音など、はたいふべきにあらず。
          冬はつとめて。雪の降りたるはいふべきにもあらず、霜のいと白きも、またさらでもいと寒きに、火など急ぎおこして、炭もて渡るもいとつきづきし。昼になりて、ぬるくゆるびもていけば、火桶の火も白き灰がちになりてわろし。
        </DivColumnCount>
      </Demo>
      <h4>column-width</h4>
      <p>
        カラムの数を指定する代わりに、カラムの幅を指定することで親要素にフィットさせることができます。
        カラムの幅の指定には、幅の割合を用いることもできます。
        カラムの幅は必ずしも指定した値になるわけではなく、親要素にピッタリとあうように計算されています。
      </p>
      <SyntaxHighlighter language="css" style={monokai} className="mb-3">
        {`div {
  column-width: 120px;
}
div {
  column-width: 300px;
}`}
      </SyntaxHighlighter>
      <Demo>
        <DivColumnWidth columnWidth={120}>
          祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。
          遠く異朝をとぶらへば、秦の趙高、漢の王莽、梁の朱忌、唐の祿山、これらは皆舊主先皇の政にもしたがはず、樂しみをきはめ、諌めをも思ひ入れず、天下の亂れん事を悟らずして、民間の愁ふるところを知らざつしかば、久しからずして、亡じにし者どもなり。
          近く本朝をうかがふに、承平の將門、天慶の純友、康和の義親、平治の信賴、これらはおごれる心もたけき事も、皆とりどりにこそありしかども、まぢかくは六波羅の入道、前太政大臣平朝臣清盛公と申しし人のありさま、傳へ承るこそ心もことばも及ばれね。
          その先祖を尋ぬれば桓武天皇第五の皇子、一品式部卿葛原親王九代の後胤、讃岐守正盛が孫、刑部卿忠盛朝臣の嫡男なり。かの親王の御子、高見王、無官無位にして失せ給ひぬ。その御子、高望王の時、初めて平の姓を賜はつて、上総介に成り給ひしより、たちまちに王氏を出でて人臣に列なる、その子鎮守府将軍良望、後には國香と改む。國香より正盛に至る六代は、諸国の受領たりしかども、殿上の仙籍をば未だ赦されず。
        </DivColumnWidth>
        <br />
        <DivColumnWidth columnWidth={300}>
          春はあけぼの。やうやう白くなりゆく山ぎは、すこしあかりて、紫だちたる
          雲のほそくたなびきたる。
          夏は夜。月のころはさらなり。やみもなほ、蛍の多く飛びちがひたる。また、ただ一つ二つなど、ほのかにうち光りて行くもをかし。雨など降るもをかし。
          秋は夕暮れ。夕日のさして山の端いと近うなりたるに、烏の寝どころへ行くとて、三つ四つ、二つ三つなど、飛びいそぐさへあはれなり。まいて雁などのつらねたるが、いと小さく見ゆるはいとをかし。日入りはてて、風の音、虫の
          音など、はたいふべきにあらず。
          冬はつとめて。雪の降りたるはいふべきにもあらず、霜のいと白きも、またさらでもいと寒きに、火など急ぎおこして、炭もて渡るもいとつきづきし。昼になりて、ぬるくゆるびもていけば、火桶の火も白き灰がちになりてわろし。
        </DivColumnWidth>
      </Demo>
      <h4>column-gap, column-rule</h4>
      <p>
        デフォルトではカラムの間の余白は1emになります。column-gapはこの値を変更するためのプロパティです。
        column-ruleを用いるとカラムの間に線を引くことができます。
      </p>
      <SyntaxHighlighter language="css" style={monokai} className="mb-3">
        {`div {
  column-count: 3;
  column-gap: 3em;
  column-rule: 0.3em double black;
  hyphens: auto;
}`}
      </SyntaxHighlighter>
      <html lang="en">
        <Demo>
          <DivColumnGapRule columnNum={3} columnsGap={3}>
            Thank You. I am honored to be with you today for your commencement
            from one of the finest universities in the world. Truth be told I
            never graduated from college and this is the closest I’ve ever
            gotten to a college graduation. Today I want to tell you three
            stories from my life. That’s it. No big deal. Just three stories.
            <br />
            The first story is about connecting the dots. I dropped out of Reed
            College after the first 6 months, but then stayed around as a
            drop-in for another 18 months or so before I really quit. So why did
            I drop out? It started before I was born. My biological mother was a
            young, unwed graduate student, and she decided to put me up for
            adoption. She felt very strongly that I should be adopted by college
            graduates, so everything was all set for me to be adopted at birth
            by a lawyer and his wife.
          </DivColumnGapRule>
        </Demo>
      </html>
      <h4>column-span</h4>
      <p>
        見出しなどのために特定の要素だけを段組みしないで表示することができます。
      </p>
      <SyntaxHighlighter language="css" style={monokai} className="mb-3">
        {`h5 {
  column-span: all;
}`}
      </SyntaxHighlighter>
      <html lang="en">
        <Demo>
          <DivColumnGapRule columnNum={2} columnsGap={3}>
            <H5ColumnSpan>
              Intro
              <hr />
            </H5ColumnSpan>
            Thank You. I am honored to be with you today for your commencement
            from one of the finest universities in the world. Truth be told I
            never graduated from college and this is the closest I’ve ever
            gotten to a college graduation. Today I want to tell you three
            stories from my life. That’s it. No big deal. Just three stories.
            <H5ColumnSpan>
              <hr />
              First
              <hr />
            </H5ColumnSpan>
            The first story is about connecting the dots. I dropped out of Reed
            College after the first 6 months, but then stayed around as a
            drop-in for another 18 months or so before I really quit. So why did
            I drop out? It started before I was born. My biological mother was a
            young, unwed graduate student, and she decided to put me up for
            adoption. She felt very strongly that I should be adopted by college
            graduates, so everything was all set for me to be adopted at birth
            by a lawyer and his wife.
          </DivColumnGapRule>
        </Demo>
      </html>
    </>
  );
};

const DivColumnCount = styled.div<{ columnNum: number }>`
  column-count: ${(props) => props.columnNum};
  width: 720px;
  font-size: 12px;
  margin: auto;
`;

const DivColumnWidth = styled.div<{ columnWidth: number }>`
  column-width: ${(props) => props.columnWidth}px;
  width: 720px;
  font-size: 12px;
  margin: auto;
`;

const DivColumnGapRule = styled.div<{ columnsGap: number; columnNum: number }>`
  column-gap: ${(props) => props.columnsGap}em;
  column-count: ${(props) => props.columnNum};
  column-rule: 0.3em double grey;
  hyphens: auto;
  width: 740px;
  font-size: 10px;
  margin: auto;
`;

const H5ColumnSpan = styled.p`
  column-span: all;
  font-size: 20px;
  margin: auto;
`;
