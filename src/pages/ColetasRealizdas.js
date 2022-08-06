import './../App.css';
import Header from '../components/Header';
import LeftMenu from '../components/LeftMenu';

function ColetasRealizdas() {
  return (
    <div className='main-container'>
      <Header title="Coletas Realizadas" />
      <div className='container'>
        <LeftMenu />
        <div className='right-menu'>
        </div>
      </div>
    </div>
  );
}

export default ColetasRealizdas;
