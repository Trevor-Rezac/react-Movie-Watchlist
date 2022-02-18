import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch, 
  Redirect
} from 'react-router-dom';
import './App.css';
import { getUser, logout } from './services/fetch-utils';
import SearchPage from './SearchPage';
import AuthPage from './AuthPage';

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
          <button onClick={logout}>Logout</button>}
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {currentUser ? <Redirect to="/search-page"/> : <AuthPage setCurrentUser={setCurrentUser}/>}
            </Route>
            <Route exact path="/search-page">
              {currentUser ? <SearchPage /> : <Redirect to="/"/>}
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
