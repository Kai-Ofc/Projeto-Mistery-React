import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

function Music() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const objetoRecebidoString = searchParams.get('musica');
  const video = objetoRecebidoString ? JSON.parse(decodeURIComponent(objetoRecebidoString)) : null;

  return (
    <>
      <h1>Título:   {video.title}</h1>
      <h1>ID:   {video.id}</h1>
    </>
  )
}

export default Music