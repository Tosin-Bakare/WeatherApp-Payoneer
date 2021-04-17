import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import LoadingPage from "../src/pages/LoadingPage/loading.jsx";
import WeatherPage from "../src/pages/weatherpage/weatherpage.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoadingPage} />
          <Route exact path="/weatherpage" component={WeatherPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
