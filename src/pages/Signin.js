import './../App.css';
import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { showPassword } from './../api'

function Signin() {

const [name, setName] = useState('')
const [surName, setSurName] = useState('')
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [passwordShow, setPasswordShow] = useState('')
const [element, setElement] = useState('')


let img = "eye15x15.png"

  const getElements = ()  =>{
    setPasswordShow(document.querySelector(".password"))
    setElement(document.querySelector(".eye"))
  }
   
  useEffect(()=>{
    getElements()
  },[])


// const showPassword = () =>{

//   const passwordShow = document.querySelector(".passaword")
//   const element = document.querySelector(".eye")
//   if(passwordShow.getAttribute('type') == 'password'){
//     img = "private15x15.png"
//     element.setAttribute('src', require(`../img/${img}`))
//     passwordShow.setAttribute('type', 'text')
//   }else{
//     img = "eye15x15.png"
//     element.setAttribute('src', require(`../img/${img}`))
//     passwordShow.setAttribute('type', 'password')
//   }
  
// }


  return (
    <div className='signin-container'>
      <h3>Preencha todos os campos abaixo</h3>
      <div>
        <div className='user-container'>
          <input type="text" placeholder='' value={name} onChange={(e)=>{setName(e.target.value)}} required />
          <label>Nome</label>
        </div>
        <div className='user-container'>
          <input type="text" placeholder='' value={surName} onChange={(e)=>{setSurName(e.target.value)}} required />
          <label>Sobrenome</label>
        </div>
        <div className='user-container'>
          <input type="text" placeholder='' value={username} onChange={(e)=>{setUsername(e.target.value)}} required />
          <label>Usuario</label>
        </div>
        <div className='user-container'>
          <input type="password" className='password' placeholder='' value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
          <label>Senha</label>
          <i className="fa fa-eye" aria-hidden="true" onClick={() => {showPassword(element, passwordShow)}}><img className='eye' src={require(`../img/${img}`)} /></i>
        </div>
      </div>
      <div className='signin-buttons'>
        <button>Salvar</button>
        <Link to={"/"}><button>Cancelar</button></Link>
        <button>Limpar</button>
      </div>
    </div>
  );
}

export default Signin;
