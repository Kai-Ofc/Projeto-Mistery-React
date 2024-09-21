// src/pages/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FlowerHeader from '../../components/Elements/flowerHeader';
import styleRegister from './Register.module.css';
import FlowerHeaderForm from '../../components/Elements/flowerHeaderForm';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password,
      });
      navigate('/login'); // Redirecionar para a página de login após o cadastro
    } catch (error) {
      setError(error.response?.data?.error || 'Erro ao cadastrar');
    }
  };

  return (
    <div className={styleRegister.container}>
      <FlowerHeader titulo="CADASTRAR"/>
      <form onSubmit={handleRegister} className={styleRegister.formRegister} >
        <div className={styleRegister.inputWrapper}>
          <FlowerHeaderForm titulo="USUÁRIO"/>
          <input
            type="text"
            placeholder='Exemplo'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styleRegister.inputWrapper}>
          <FlowerHeaderForm titulo="EMAIL"/>
          <input
            type="email"
            placeholder='Exemplo@exemple.com.br'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styleRegister.inputWrapper}>
          <FlowerHeaderForm titulo="SENHA"/>
          <input
            type="password"
            placeholder='Exemplo1234'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit" className={styleRegister.buttonRegister}>CADASTRAR</button>
      </form>
    </div>
  );
};

export default Register;
