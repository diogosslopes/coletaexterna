import './../App.css';
import Button from './Button'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function CardRealizadas(props) {

  const [coletas, setColetas] = useState(JSON.parse(localStorage.getItem("coletasFinalizadas")))

  if (coletas == null) {
    localStorage.setItem("coletasFinalizadas", "[]")

  }

  return (

    <div className='container-card'>
      {
        coletas.map((c => {
          return (
            
            <div className='card' key={c.idColeta}>
              <label><strong>Nome:</strong> {c.name}</label>
              <label><strong>Idade:</strong> {c.age}</label>
              <div className='label-card'>
                <label><strong>Data:</strong> {c.date}</label>
                <label><strong>Horario:</strong> {c.time}</label>
              </div>
              <label><strong>Endereço:</strong> {c.street}</label>
              <label><strong>Complemento:</strong> {c.complement}</label>
              <div className='label-card'>
                <label><strong>Situação:</strong> {c.pago}</label>
                <label><strong>Total:</strong> {`R$ ${c.total}`}</label>
              </div>
              <div className='buttons cards-btn'>
                <Link to={'/cadacoleta'} ><Button buttonName='Editar' /></Link>
                <Link to={'/coletasagendadas'} reloadDocument="true" ><Button buttonName='Finalizar' tipo="finalizar" idcoleta={c.idColeta} /></Link>
                <Link to={`/coletar/${c.idColeta}`}><Button buttonName='Detalhes' tipo="detalhe" idcoleta={c.idColeta} /></Link>
                <a target='_blank' href={`https://google.com/maps/search/${c.street} ${c.number} ${c.bairro} ${c.city}`} rel='external'><Button buttonName='Ver no mapa' /></a>
              </div>
            </div>
            

          )
        }))
      }

    </div>

  );
}

export default CardRealizadas;
