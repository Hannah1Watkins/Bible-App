import React, { useState } from 'react';
import { auth } from './firebase';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Sign-in successful - redirect to another page
    } catch (error) {
      console.error('Error signing in:', error);
      // Handle sign-in error - show message
    }
  };

  return (
    <div className="App">
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default App;

