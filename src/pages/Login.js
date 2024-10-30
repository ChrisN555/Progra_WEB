// src/pages/Login.js
import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../firebaseConfig';

function Login() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User:', result.user);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <button onClick={handleLogin}>Iniciar sesión con Google</button>
    </div>
  );
}

export default Login;
