import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch, 
  Redirect,
  NavLink
} from 'react-router-dom';
import './App.css';
import { getUser, logout } from './services/fetch-utils';
import SearchPage from './SearchPage';
import AuthPage from './AuthPage';
import Watchlist from './Watchlist';

function App() {
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const user = getUser();

    setCurrentUser(user);
  }, []);

  console.log('||', currentUser);
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {currentUser &&
          <ul>
            <NavLink to="/search-page">Search Page</NavLink>
            <NavLink to="/watchlist">Watchlist</NavLink>
            <button onClick={logout}>Logout</button>
          </ul> }
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {currentUser ? <Redirect to="/search-page"/> : <AuthPage setCurrentUser={setCurrentUser}/>}
            </Route>
            <Route exact path="/search-page">
              {currentUser ? <SearchPage /> : <Redirect to="/"/>}
            </Route>
            <Route exact path="/watchlist">
              {currentUser ? <Watchlist /> : <Redirect to="/"/>}
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
