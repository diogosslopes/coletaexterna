import React from "react";

export const showPassword = (element, passwordShow) =>{
    let img = "eye15x15.png"

    console.log(element)

    if(passwordShow.getAttribute('type') == 'password'){
      img = "private15x15.png"
      element.setAttribute('src', require(`./img/${img}`))
      passwordShow.setAttribute('type', 'text')
    }else{
      img = "eye15x15.png"
      element.setAttribute('src', require(`./img/${img}`))
      passwordShow.setAttribute('type', 'password')
    }
    
  }
