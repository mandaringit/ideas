import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";
import Bin2Dec from "./features/Bin2Dec/Bin2Dec";
import BorderRadiusPreviewer from "./features/BorderRadiusPreviewer/BorderRadiusPreviewer";
import Calculator from "./features/Calculator/Calculator";
import CauseEffect from "./features/CauseEffect/CauseEffect";
import ChristmasLights from "./features/ChristmasLights/ChristmasLights";
import CountdownTimer from "./features/CountdownTimer/CountdownTimer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Navbar} />
        <Route path='/bin2dec' component={Bin2Dec} />
        <Route path='/border-radius' component={BorderRadiusPreviewer} />
        <Route path='/calculator' component={Calculator} />
        <Route path='/christmaslights' component={ChristmasLights} />
        <Route path='/causeeffect' component={CauseEffect} />
        <Route path='/countdowntimer' component={CountdownTimer} />
      </Switch>
    </Router>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  html,body,#root{
    height:100%;
  }
  body{
    margin:0;
  }
`;
