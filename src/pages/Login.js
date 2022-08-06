import './../App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { showPassword } from '../api'

function Login() {

  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [passwordShow, setPasswordShow] = useState('')
  const [element, setElement] = useState('')

  let img = "eye15x15.png"

  const getElements = () => {
    setPasswordShow(document.querySelector(".password"))
    setElement(document.querySelector(".eye"))
  }

  useEffect(() => {
    getElements()
  }, [])



  return (

    <div className='login-container'>
      <h3>Digite o Usuario e a Senha</h3>
      <div>
        <div className='user-container'>
          <input type="text" placeholder='' value={username} onChange={(e) => setUsername(e.target.value)} required />
          <label>Usuario</label>
        </div>
        <div className='user-container'>
          <input type="password" className='password' placeholder='' value={password} onChange={(e) => setPassword(e.target.value)} required />
          <label>Senha</label>
          <i className="fa fa-eye" aria-hidden="true" onClick={() => {showPassword(element, passwordShow)}}><img className='eye' src={require(`../img/${img}`)} /></i>
        </div>
      </div>
      <div className='login-buttons'>
        <Link to={"/coletasagendadas"} ><button>Entrar</button></Link>
        <Link to={"/signin"}><button>Cadastrar</button></Link>
      </div>
    </div>
  );
}

export default Login;
