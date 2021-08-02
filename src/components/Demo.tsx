import React, { Children } from "react";
import styled from "styled-components";

type Props = {};

export const Demo: React.FC<Props> = (props) => {
  return <DemoSpace>{props.children}</DemoSpace>;
};

const DemoSpace = styled.div`
  background-color: lightyellow;
  padding: 20px 0px 20px 40px;
  margin-bottom: 50px;
`;
