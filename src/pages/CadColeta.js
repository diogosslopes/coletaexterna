import './../App.css';
import Header from '../components/Header';
import LeftMenu from '../components/LeftMenu';
import RightMenu from '../components/RightMenu';
import FormColeta from '../components/FormColeta';

function CadColeta() {
  return (
    <div className='main-container'>
    <Header title="Cadastro de Coleta" />
    <div className='container'>
      <LeftMenu />
      <FormColeta />
    </div>
  </div>
  );
}

export default CadColeta;
