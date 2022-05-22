import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from "react-router-dom";

function App(props) {
  const [usuario, setUsuario ] = useState('');

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          useHistory.push(repository.name);
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
    });
}

  return (
      <S.Container >
        <S.Input className='usuarioInput' placeholder='Usuário' value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button >
      </S.Container>
  );
}

export default App;


// JSX