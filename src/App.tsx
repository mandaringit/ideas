import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Bin2Dec from "./features/Bin2Dec/Bin2Dec";
import BorderRadiusPreviewer from "./features/BorderRadiusPreviewer/BorderRadiusPreviewer";
import Calculator from "./features/Calculator/Calculator";
import CauseEffect from "./features/CauseEffect/CauseEffect";
import ChristmasLights from "./features/ChristmasLights/ChristmasLights";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/bin2dec' component={Bin2Dec} />
        <Route path='/border-radius' component={BorderRadiusPreviewer} />
        <Route path='/calculator' component={Calculator} />
        <Route path='/christmaslights' component={ChristmasLights} />
        <Route path='/causeeffect' component={CauseEffect} />
      </Switch>
    </Router>
  );
}

export default App;
