import React from 'react';
import './App.css';
import Login from './components/login/login';
import 'react-notifications/lib/notifications.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import EventList from './components/event-list/eventList';
import AddEvent from './components/add-event/addEvent';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Redirect from="/" exact to="/login" />
          <Route path="/login" component={Login} />
          <Route path="/event-list" component={EventList} />
          <Route path="/add-event" component={AddEvent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
