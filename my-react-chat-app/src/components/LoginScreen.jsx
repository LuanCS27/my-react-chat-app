// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    if (username.trim() !== '') {
      onLogin(username);
      history.push('/chat'); 
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Digite seu nome"
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

LoginScreen.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginScreen;
