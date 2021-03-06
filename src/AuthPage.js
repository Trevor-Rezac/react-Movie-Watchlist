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
    <div className='auth-page'>
      <h3>Sign In / Sign Up</h3>
      <div className='form-container'>
        <form onSubmit={handleSignIn}>
          <input required 
            placeholder='Email'
            type='email'
            value={emailForm}
            onChange={(e) => setEmailForm(e.target.value)}
          />
          <input required
            placeholder='Password'
            type='password'
            value={passwordForm}
            onChange={(e) => setPasswordForm(e.target.value)}
          />
          <div className='auth-btns'>
            <button className='sign-in-btn' >Sign In</button>
            <button className='sign-up-btn' onClick={handleSignUp}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
