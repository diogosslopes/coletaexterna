import './../App.css';
import Button from './Button';
import { Link } from 'react-router-dom'
import InputsCad from './InputsCad';

function FormColeta(props) {
  return (
    <div className='right-menu'>
      <div className='info-container'>
        <h4>Horario</h4>
        <div className="inputs-container">
          <div className='comun date' >
            <input className='date' type='date' placeholder=''></input>
            <label className='comum-label' >Data</label>
          </div>
          <div className='comun time' >
            <input className='time' type='time' placeholder=''></input>
            <label className='comum-label' >Horario</label>
          </div>

          <div className='comun'>
            <select className='saida'>
              <option value="bm" >Barra Mansa</option>
              <option value="ca" >Volta Redonda</option>
            </select>
            <label className='comum-label'>Saida de</label>
          </div>
        </div>
      </div>
      <div className='info-container'>
        <h4>Dados Pessoais</h4>
        <div className="inputs-container">
          <InputsCad class='name' type='text' label='Nome' />
          <InputsCad class='age' type='text' label='Idade' />
          <InputsCad class='phone' type='text' label='Telefone' />
        </div>
      </div>
      <div className="info-container">
        <h4>Endereço</h4>
        <div id='adress' className="inputs-container">
          <InputsCad class='cep' type='text' label='CEP' />
          <InputsCad class='street' type='text' label='Logradouro' />
          <InputsCad class='bairro' type='text' label='Bairro' />
          <InputsCad class='city' type='text' label='Cidade' />
          <InputsCad class='number' type='text' label='N°' />
          <InputsCad class='complement' type='text' label='Complemento' />
          <InputsCad class='referencia' type='text' label='Referência' />
        </div>
      </div>
      <div className='info-container'>
        <h4>Valores</h4>
        <div className="inputs-container">
          <InputsCad class='convenio' type='text' label='Convenio' />
          <InputsCad class='valor-exame' type='text' label='Valor' />
          <InputsCad class='valor-taxa' type='text' label='Taxa' />
          <InputsCad class='valor-total' type='text' label='Total' />
          <div className='container-rmenu'>
            <select >
              <option value="pago" >Pago</option>
              <option value="pagar" >A pagar</option>
            </select>
            <label className='comum-label'>Situação</label>
          </div>
        </div>
      </div>
      <div className='info-container'>
        <h4>Informações adicionais</h4>
        <div className="inputs-container">
          <div className='container-rmenu selects'>
            <select >
              <option value="yes" >Sim</option>
              <option value="no" >Não</option>
            </select>
            <label className='comum-label'>Paciente acamado ?</label>
          </div>
          <div className='container-rmenu selects'>
            <select >
              <option value="yes" >Sim</option>
              <option value="no" >Não</option>
            </select>
            <label className='comum-label'>Paciente agitado ?</label>
          </div>
          <div className='container-rmenu selects'>
            <select >
              <option value="yes" >Sim</option>
              <option value="no" >Não</option>
            </select>
            <label className='comum-label'>Auxilio para coletora ?</label>
          </div>

        </div>
        <div className='container-rmenu textareas'>
          <div id='textareas'>
            <textarea required></textarea>
            <label>Possui alguma doença ?</label>
          </div>
          <div id='textareas'>
            <textarea required></textarea>
            <label>Observações</label>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='buttons right-buttons'>
          <Link to={"/coletasagendadas"}><Button buttonName="Salvar" /></Link>
          <Link to={"/coletasagendadas"}><Button buttonName="Cancelar" /></Link>
          <Link to={""}><Button buttonName="Limpar" /></Link>
        </div>
      </div>
    </div>
  );
}

export default FormColeta;
