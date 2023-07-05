import React, { useState } from 'react';
import './ForgotPsd.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Effectuer des actions pour réinitialiser le mot de passe ici
    // Envoyer l'e-mail de réinitialisation du mot de passe au serveur, par exemple

    // Réinitialiser le champ de formulaire
    setEmail('');
  };

  return (
    <div className="forgot-password-container">
      <form onSubmit={handleSubmit}>
        <h3>Forgot Password</h3>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
