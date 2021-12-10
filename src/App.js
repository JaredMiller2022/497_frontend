import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import { useState } from 'react';

function App() {
  const [ authedUser, setAuthedUser ] = useState(-1)

  return (
    <>
    <Router>
      <Navbar authedUser={authedUser} setAuthedUser={setAuthedUser} />
      <Switch>
      	<Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/log-in' exact render={() => (
          <Login authedUser={authedUser} setAuthedUser={setAuthedUser}/>
        )} />
        <Route path='/sign-up' exact render={() => (
          <SignUp authedUser={authedUser} setAuthedUser={setAuthedUser}/>
        )} />
        <Route path='/profile' exact render={() => (
          <Profile authedUser={authedUser} setAuthedUser={setAuthedUser}/>
        )}/>
      </Switch>
     </Router>
    </>
  );
}

export default App;
