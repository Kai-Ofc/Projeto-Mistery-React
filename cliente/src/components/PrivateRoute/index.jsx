import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ roles }) => {
  const token = localStorage.getItem('token');

  // Função para decodificar o payload do JWT manualmente
  const decodeToken = (token) => {
    try {
      const base64Url = token.split('.')[1]; // Extrai a parte do payload do token
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload); // Retorna o payload decodificado como objeto JSON
    } catch (error) {
      console.error('Token inválido', error);
      return null;
    }
  };

  const decodedToken = token ? decodeToken(token) : null;
  const userRole = decodedToken ? decodedToken.role : null;

  // Redireciona para o login se não houver token
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Verifica se o usuário tem o papel necessário
  if (roles && roles.length > 0 && !roles.includes(userRole)) {
    return <Navigate to="/" />;
  }

  // Retorna o Outlet para exibir as rotas protegidas
  return <Outlet />;
};

export default PrivateRoute;