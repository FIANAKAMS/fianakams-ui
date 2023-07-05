import React, { useState } from 'react';
import './CreateAccount.css';

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // État pour afficher ou masquer le mot de passe

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="create-account-container">
      
      <form onSubmit={handleSubmit}>
        <h3>Create Account</h3>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />

        <label htmlFor="password">Password</label>

        <input
          type={showPassword ? 'text' : 'password'} // Utilisation du type de champ dynamique
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
        />

        <label htmlFor="confirm-password">Confirm Password</label>          
        
        <input
          type={showPassword ? 'text' : 'password'} // Utilisation du type de champ dynamique
          id="confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="Confirm your password"
        />
        
        <input
            type="checkbox"
            id="show-password"
            checked={showPassword}
            onChange={toggleShowPassword}
          />

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;
