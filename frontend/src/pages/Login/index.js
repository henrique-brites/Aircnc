import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
  const [email, setEmail] = useState('');

  async function handleSubmit(event){
    event.preventDefault(); //nao redireciona a pagina, permanece na mesma, mesmo depois do clique 
    const response = await api.post('/sessions', { email })

    const { _id } = response.data;

    localStorage.setItem('user', _id); //armazena o id na memoria do navegador 

    history.push('/dashboard'); //navegação para a proxima pagina 
  }

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input 
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <button className="btn" type="submit">Entrar</button>
      </form>   
    </> 
  )
}