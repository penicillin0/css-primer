import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { About } from "./pages/About/About";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { WebFont } from "./pages/WebFont/WebFont";
import { Text } from "./pages/Text/Text";
import { Columns } from "./pages/Columns/Columns";
import styled from "styled-components";
import { Button } from "reactstrap";

export const RootingPage = () => {
  const location = useLocation();
  const [canScroll, setCanScroll] = React.useState<boolean>(false);

  React.useEffect(() => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    console.log(location);
    console.log(scrollHeight, clientHeight);
    if (scrollHeight > clientHeight) {
      setCanScroll(true);
    } else {
      setCanScroll(false);
    }
  }, [location]);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/webfont" component={WebFont} />
        <Route exact path="/about" component={About} />
        <Route exact path="/text" component={Text} />
        <Route exact path="/columns" component={Columns} />
      </Switch>
      {canScroll && (
        <ButtonContainer>
          <Button outline color="secondary" onClick={returnTop}>
            Return to top
          </Button>
        </ButtonContainer>
      )}
    </>
  );
};

const ButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
