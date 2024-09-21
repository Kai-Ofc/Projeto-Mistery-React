import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styleLogin from './Login.module.css';
import FlowerHeader from '../../components/Elements/flowerHeader';
import FlowerHeaderForm from '../../components/Elements/flowerHeaderForm';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      const { token, role } = response.data;
      
      // Armazenar o token no localStorage ou sessionStorage
      localStorage.setItem('token', token);

      // Redirecionar o usuário dependendo do papel
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/home');
      }
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  };

  return (
    <div className={styleLogin.container}>
      <FlowerHeader titulo="CADASTRAR"/>
      <form onSubmit={handleLogin} className={styleLogin.formRegister}>
        <div className={styleLogin.inputWrapper}>
          <FlowerHeaderForm titulo="EMAIL"/>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styleLogin.inputWrapper}>
          <FlowerHeaderForm titulo="SENHA"/>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styleLogin.buttonRegister}>Entrar</button>
      </form>
    </div>
  );
};

export default Login;

