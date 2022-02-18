import React, { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function AuthPage({ setCurrentUser }) {
  const [emailForm, setEmailForm] = useState('');
  const [passwordForm, setPasswordForm] = useState('');

  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signUp(emailForm, passwordForm);
    setCurrentUser(user);
    setEmailForm('');
    setPasswordForm('');
  }

  async function handleSignIn(e) {
    e.preventDefault();
    const user = await signIn(emailForm, passwordForm);
    setCurrentUser(user);
    setEmailForm('');
    setPasswordForm('');
  }

  return (
    <>
      <h3>AuthPage</h3>
      <div className='form-container'>
        <form onSubmit={handleSignIn}>
          <input placeholder='Email'
            type='email'
            value={emailForm}
            onChange={(e) => setEmailForm(e.target.value)}
          />
          <input placeholder='Password'
            type='password'
            value={passwordForm}
            onChange={(e) => setPasswordForm(e.target.value)}
          />
          <button>Sign In</button>
          <button onClick={handleSignUp}>Sign Up</button>
        </form>
      </div>
    </>
  );
}
