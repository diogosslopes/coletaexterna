import './../App.css';
import Header from '../components/Header';
import LeftMenu from '../components/LeftMenu';
import RightMenu from '../components/RightMenu';
import FormColeta from '../components/FormColeta';

function CadColeta(props) {

  console.log(props.idColeta)
  // const { id } = useParams()
  // const [coletasAgendadas, setColetasAgendadas] = useState( JSON.parse( localStorage.getItem("coletasAgendadas")))
  // const coleta = coletasAgendadas.filter((c) => id == c.idColeta)

  // console.log(coletasAgendadas)
  // console.log(coleta[0].name)

  // return (
  //     <div className='main-container'>
  //       <Header title="Detatlhes da Coleta" />
  //       <div className='container'>
  //         <LeftMenu />
  //         <DetalhesColeta coleta={coleta[0]} />
  //       </div>
  //     </div>

  // );




  return (
    <div className='main-container'>
    <Header title="Cadastro de Coleta" />
    <div className='container'>
      <LeftMenu />
      <FormColeta tipo={'cadastrar'} />
    </div>
  </div>
  );
}

export default CadColeta;
