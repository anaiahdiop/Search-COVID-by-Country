import React from 'react';
import './App.css';
import Home from "./components/homePage.js";
import Result from "./components/resultPage.js";
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App(){
    return(
      <Router>
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/result/:country"> <Result /> </Route>
        </Switch>
      </Router>
    );
  }

export default App;
