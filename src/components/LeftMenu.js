import './../App.css';
import Button from './Button';
import { Link } from 'react-router-dom'

function LeftMenu() {
  return (
   <div className='left-menu'>
    <div className='images'>
      <img src={require(`../img/centrolab300x78.png`)} />
      <img src={require(`../img/logofacil300x106.png`)} />
    </div>
    <div className='buttons'>
      <Link to={'/cadacoleta'}><Button buttonName = "Cadastrar Coleta" /></Link>
      <Link to={'/coletasagendadas'}><Button buttonName = "Coletas Agendadas" /></Link>
      <Link to={'/coletasrealizadas'}><Button buttonName = "Coletas Realizadas" /></Link>
      <Link to={'/'}><Button buttonName = "Sair" /></Link>
    </div>
   </div>
  );
}

export default LeftMenu;
