import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './../App.css';
import LeftMenu from '../components/LeftMenu'
import DetalhesColeta from '../components/DetaclhesColeta';
import Header from '../components/Header';

function DetalhesColetasCad() {

  const { id } = useParams()
  const [coletasAgendadas, setColetasAgendadas] = useState( JSON.parse( localStorage.getItem("coletasAgendadas")))
  const coleta = coletasAgendadas.filter((c) => id == c.idColeta)

  console.log(coletasAgendadas)
  console.log(coleta[0].name)

  return (
      <div className='main-container'>
        <Header title="Detatlhes da Coleta" />
        <div className='container'>
          <LeftMenu />
          <DetalhesColeta coleta={coleta[0]} />
        </div>
      </div>

  );
}

export default DetalhesColetasCad;
