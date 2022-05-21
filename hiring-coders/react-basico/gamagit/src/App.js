import React, { useState } from "react";

function App(props) {
  const [usuario, setUsuario ] = useState('');
  return (
    <> 
      <input className='usuarioInput' placeholder='Usuário' onChange={e => console.log(e.target.value)} />
      <button type="button">Pesquisar</button>
    </>
  );
}

export default App;


// JSX