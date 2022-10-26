import './../App.css';
import Button from './Button';
import { Link } from 'react-router-dom'
import InputsCad from './InputsCad';
import Card from './Card';
import CardRealizadas from './CardRealizadas';

function RightMenuRealizadas() {
  return (
    <div className='right-menu'>
      <CardRealizadas />
    </div>
  );
}

export default RightMenuRealizadas;
