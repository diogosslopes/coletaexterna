import './../App.css';
import Button from './Button'
import { Link } from 'react-router-dom'

function Card(props) {
  return (

    <div className='container-card'>
      <div className='card'>
        <label><strong>Nome:</strong> Diogo Sousa Silva Lopes</label>
        <label><strong>Idade:</strong> 35</label>
        <div className='label-card'>
          <label><strong>Data:</strong> 25/08/1987</label>
          <label><strong>Horario:</strong> 09:00</label>
        </div>
        <label><strong>Endereço:</strong> Rua Geraldo Magela de Andrade, n° 103 - Vila Ursulino - Barra Mansa</label>
        <label><strong>Complemento:</strong> Casa 2</label>
        <div className='label-card'>
          <label><strong>Situação:</strong> À pagar</label>
          <label><strong>Total:</strong> R$90,00</label>
        </div>
        <div className='buttons cards-btn'>
          <Link to={'/cadacoleta'} ><Button buttonName='Editar' /></Link>
          <Link to={'/coletasagendadas'} ><Button buttonName='Finalizar' /></Link>
          <Link to={'/coletasagendadas'} ><Button buttonName='Excluir' /></Link>
          <a href='https://google.com/maps/search/Rua Geraldo Magela de Andrade, n° 103 - Vila Ursulino - Barra Mansa'><Button buttonName='Ver no mapa' /></a>
        </div>
      </div>
      <div className='card'>
        <label><strong>Nome:</strong> Diogo Sousa Silva Lopes</label>
        <label><strong>Idade:</strong> 35</label>
        <div className='label-card'>
          <label><strong>Data:</strong> 25/08/1987</label>
          <label><strong>Horario:</strong> 09:00</label>
        </div>
        <label><strong>Endereço:</strong> Rua Geraldo Magela de Andrade, n° 103 - Vila Ursulino - Barra Mansa</label>
        <label><strong>Complemento:</strong> Casa 2</label>
        <div className='label-card'>
          <label><strong>Situação:</strong> À pagar</label>
          <label><strong>Total:</strong> R$90,00</label>
        </div>
        <div className='buttons cards-btn'>
          <Link to={'/cadacoleta'} ><Button buttonName='Editar' /></Link>
          <Link to={'/coletasagendadas'} ><Button buttonName='Finalizar' /></Link>
          <Link to={'/coletasagendadas'} ><Button buttonName='Excluir' /></Link>
          <a href='https://google.com/maps/search/Rua Geraldo Magela de Andrade, n° 103 - Vila Ursulino - Barra Mansa'><Button buttonName='Ver no mapa' /></a>
        </div>
      </div>
      <div className='card'>
        <label><strong>Nome:</strong> Diogo Sousa Silva Lopes</label>
        <label><strong>Idade:</strong> 35</label>
        <div className='label-card'>
          <label><strong>Data:</strong> 25/08/1987</label>
          <label><strong>Horario:</strong> 09:00</label>
        </div>
        <label><strong>Endereço:</strong> Rua Geraldo Magela de Andrade, n° 103 - Vila Ursulino - Barra Mansa</label>
        <label><strong>Complemento:</strong> Casa 2</label>
        <div className='label-card'>
          <label><strong>Situação:</strong> À pagar</label>
          <label><strong>Total:</strong> R$90,00</label>
        </div>
        <div className='buttons cards-btn'>
          <Link to={'/cadacoleta'} ><Button buttonName='Editar' /></Link>
          <Link to={'/coletasagendadas'} ><Button buttonName='Finalizar' /></Link>
          <Link to={'/coletasagendadas'} ><Button buttonName='Excluir' /></Link>
          <a href='https://google.com/maps/search/Rua Geraldo Magela de Andrade, n° 103 - Vila Ursulino - Barra Mansa'><Button buttonName='Ver no mapa' /></a>
        </div>
      </div>
      <div className='card'>
        <label><strong>Nome:</strong> Diogo Sousa Silva Lopes</label>
        <label><strong>Idade:</strong> 35</label>
        <div className='label-card'>
          <label><strong>Data:</strong> 25/08/1987</label>
          <label><strong>Horario:</strong> 09:00</label>
        </div>
        <label><strong>Endereço:</strong> Rua Geraldo Magela de Andrade, n° 103 - Vila Ursulino - Barra Mansa</label>
        <label><strong>Complemento:</strong> Casa 2</label>
        <div className='label-card'>
          <label><strong>Situação:</strong> À pagar</label>
          <label><strong>Total:</strong> R$90,00</label>
        </div>
        <div className='buttons cards-btn'>
          <Link to={'/cadacoleta'} ><Button buttonName='Editar' /></Link>
          <Link to={'/coletasagendadas'} ><Button buttonName='Finalizar' /></Link>
          <Link to={'/coletasagendadas'} ><Button buttonName='Excluir' /></Link>
          <a href='https://google.com/maps/search/Rua Geraldo Magela de Andrade, n° 103 - Vila Ursulino - Barra Mansa'><Button buttonName='Ver no mapa' /></a>
        </div>
      </div>
    </div>

  );
}

export default Card;
