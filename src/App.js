import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import RoomBooking from "./components/RoomBooking";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={RoomBooking} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
