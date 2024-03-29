import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 2rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  // state de las frases
  const [frase, guardarFrase] = useState({});

  // useEffect cargar una frase
  useEffect( () => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {

    // fetch toma la url de la que se hace la consulta
    const api = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]);

  }

  return (
    <Contenedor>
      <Frase 
        frase = {frase}
      />
      <Boton
        onClick={consultarAPI}
      >
        Obtener frase
      </Boton>
    </Contenedor>
  );
}

export default App;
