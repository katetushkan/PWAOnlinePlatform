import React from "react";
import BaseRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {

  render() {
    return(
        <Router>
            <BaseRouter/>
        </Router>
    )
  }
}

export default App;
