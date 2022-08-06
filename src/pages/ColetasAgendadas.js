import Header from '../components/Header';
import LeftMenu from '../components/LeftMenu';
import RightMenu from '../components/RightMenu';
import './../App.css';

function ColetasAgendadas() {
  return (
    
    <div className='main-container'>
      <Header title="Coletas Agendadas" />
      <div className='container'>
        <LeftMenu />
        <RightMenu />
      </div>
    </div>
  );
}

export default ColetasAgendadas;
