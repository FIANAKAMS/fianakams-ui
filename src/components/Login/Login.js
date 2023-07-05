import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Effectuer des actions de connexion ici, par exemple envoyer les données au serveur
    setUsername('');
    setPassword('');
  };

  const handleForgotPassword = () => {
    // Rediriger vers la page ForgotPassword lorsque le bouton Forgot password est cliqué
    navigate('/forgot-password');
  };

  const handleCreateAccount = () => {
    // Rediriger vers la page CreateAccount lorsque le bouton Create account est cliqué
    navigate('/create-account');
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form onSubmit={handleLogin}>
        <h3>Login here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or phone"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit" className="LogIn">
          Log in
        </button>

        <div className="reseau">
          <div className="go">
            <button className="forgot" onClick={handleForgotPassword}>
              Forgot password
            </button>
          </div>
          <div className="facebook">
            <button className="forgot" onClick={handleCreateAccount}>
              Create account
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
