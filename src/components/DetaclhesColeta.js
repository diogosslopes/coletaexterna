import './../App.css';
import Card from './Card';

function DetalhesColeta(props) {
  const coleta = props.coleta
  console.log(coleta)
  return (
    <div className='right-menu'>
      <div className='container-card-detalhes'>
        <div className='card card-detalhes' key={coleta.idColeta}>
          <div className='label-detalhes label-card'>
            <label><strong>Data:</strong> {coleta.date}</label>
            <label><strong>Horario:</strong> {coleta.time}</label>
            <label><strong>Saida de:</strong> {coleta.saida}</label>
          </div>
          <div className='label-card-detalhes'>
            <label><strong>Nome:</strong> {coleta.name}</label>
            <label><strong>Idade:</strong> {coleta.age}</label>
            <label><strong>Endereço:</strong> {coleta.street}, {coleta.number} -  {coleta.bairro} -  {coleta.city}</label>
            <label><strong>Complemento:</strong> {coleta.complement}</label>
            <label><strong>Ponto de Referencia:</strong> {coleta.reference}</label>
          </div>
          <div className='label-card-detalhes'>
            <label><strong>Paciente acamado:</strong> {coleta.convenio}</label>
            <label><strong>Paciente agitado:</strong> {coleta.agitado}</label>
            <label><strong>Auxilio para coletora:</strong> {coleta.auxilio }</label>
            <label><strong>Possui alguma doença:</strong> {coleta.doenca}</label>
            <label><strong>Observações:</strong> {coleta.obs}</label>
          </div>
          <div className='llabel-card-detalhes'>
            <label><strong>Convenio:</strong> {coleta.convenio}</label>
            <div className='label-card-detalhes-valores label-card'>
              <label><strong>Situação:</strong> {coleta.pago}</label>
              <label><strong>Valor dos exames:</strong> R$ {coleta.valor}</label>
              <label><strong>Taxa de coleta:</strong> R$ {coleta.taxa}</label>
              <label><strong>Total:</strong> R$ {coleta.total}</label>
            </div>
          </div>
          {/* <div className='buttons cards-btn'>
                <Link to={'/cadacoleta'} ><Button buttonName='Editar' /></Link>
                <Link to={'/coletasagendadas'} ><Button buttonName='Finalizar' /></Link>
                <Link to={'/coletasagendadas'} reloadDocument="true" ><Button buttonName='Excluir' tipo="delete" idcoleta={c.idColeta} /></Link>
                <Link to={`/coleta/${c.idColeta}`}><Button buttonName='Detalhes' tipo="detalhe" idcoleta={c.idColeta} /></Link>
                <a target='_blank' href={`https://google.com/maps/search/${c.street} ${c.number} ${c.bairro} ${c.city}`} rel='external'><Button buttonName='Ver no mapa' /></a>
              </div> */}
        </div>
      </div>
    </div>
  );
}

export default DetalhesColeta;
