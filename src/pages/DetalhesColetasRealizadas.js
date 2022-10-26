import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './../App.css';
import LeftMenu from '../components/LeftMenu'
import DetalhesColeta from '../components/DetaclhesColeta';
import Header from '../components/Header';

function DetalhesColetasRealizadas() {
  
    const { id } = useParams()
    const [coletasFinalizadas, setColetasFinalizadas] = useState( JSON.parse( localStorage.getItem("coletasFinalizadas")))
    const coleta = coletasFinalizadas.filter((c) => id == c.idColeta)
  
    
    console.log(coleta[0].name)
  
    return (
        <div className='main-container'>
          <Header title="Detalhes da Coleta" />
          <div className='container'>
            <LeftMenu />
            <DetalhesColeta coleta={coleta[0]} />
          </div>
        </div>
  
    );
  
}

export default DetalhesColetasRealizadas;
