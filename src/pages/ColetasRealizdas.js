import './../App.css';
import Header from '../components/Header';
import LeftMenu from '../components/LeftMenu';
import RightMenu from '../components/RightMenu'
import RightMenuRealizadas from '../components/RightMenuRealizadas';

function ColetasRealizdas() {
  return (
    <div className='main-container'>
      <Header title="Coletas Realizadas" />
      <div className='container'>
        <LeftMenu />
        <RightMenuRealizadas />
      </div>
    </div>
  );
}

export default ColetasRealizdas;
