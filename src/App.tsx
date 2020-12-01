import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Bin2Dec from "./features/Bin2Dec/Bin2Dec";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/bin2dec' component={Bin2Dec} />
      </Switch>
    </Router>
  );
}

export default App;
