import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './App.css';
import { getUser } from './services/fetch-utils';
import SearchPage from './SearchPage';
import AuthPage from './AuthPage';
import WatchlistPage from './WatchlistPage';
import PopularMovieList from './PopularMovieList';
import NavBar from './NavBar';

function App() {
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const user = getUser();

    setCurrentUser(user);
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {currentUser ? <NavBar /> : <h2>Movie Watchlist</h2>}
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {currentUser ? (
                <Redirect to="/watchlist" />
              ) : (
                <AuthPage setCurrentUser={setCurrentUser} />
              )}
            </Route>
            <Route exact path="/search-page">
              {currentUser ? <SearchPage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/watchlist">
              {currentUser ? <WatchlistPage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/popular-movies">
              {currentUser ? <PopularMovieList /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
