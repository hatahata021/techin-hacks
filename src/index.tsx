import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Amplify from "aws-amplify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import awsExports from "./aws-exports";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/core";

Amplify.configure(awsExports);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/:id">
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
