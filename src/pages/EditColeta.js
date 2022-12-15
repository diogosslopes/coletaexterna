import './../App.css';
import Header from '../components/Header';
import LeftMenu from '../components/LeftMenu';
import RightMenu from '../components/RightMenu';
import FormColeta from '../components/FormColeta';
import { useParams, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Button from '../components/Button';

function EditColeta(props) {

  const { id } = useParams()
  const [coletasAgendadas, setColetasAgendadas] = useState(JSON.parse(localStorage.getItem("coletasAgendadas")))
  const coleta = coletasAgendadas.filter((c) => id == c.idColeta)

  console.log(coleta)

  const [date, setDate] = useState(coleta[0].date)
  const [time, setTime] = useState(coleta[0].time)
  const [saida, setSaida] = useState(coleta[0].saida)
  const [name, setName] = useState(coleta[0].name)
  const [age, setAge] = useState(coleta[0].age)
  const [phone, setPhone] = useState(coleta[0].phone)
  const [cep, setCep] = useState(coleta[0].cep)
  const [street, setStreet] = useState(coleta[0].street)
  const [bairro, setBairro] = useState(coleta[0].bairro)
  const [city, setCity] = useState(coleta[0].city)
  const [number, setNumber] = useState(coleta[0].number)
  const [complement, setComplement] = useState(coleta[0].complement)
  const [reference, setReference] = useState(coleta[0].reference)
  const [convenio, setConvenio] = useState(coleta[0].convenio)
  const [valor, setValor] = useState(coleta[0].valor)
  const [taxa, setTaxa] = useState(coleta[0].taxa)
  const [total, setTotal] = useState(coleta[0].total)
  const [pago, setPago] = useState(coleta[0].pago)
  const [acamado, setAcamado] = useState(coleta[0].acamado)
  const [agitado, setAgitado] = useState(coleta[0].agitado)
  const [auxilio, setAuxilio] = useState(coleta[0].auxilio)
  const [doenca, setDoenca] = useState(coleta[0].doenca)
  const [obs, setObs] = useState(coleta[0].obs)
  const [status, setStatus] = useState("agendada")

  const pesquisaCep = async() =>{
    const url = `http://viacep.com.br/ws/${cep}/json/`
    const dadosCep = await fetch(url)
    const endCompleto = await dadosCep.json()
    console.log(endCompleto)
    setStreet(endCompleto.logradouro)
    setCity(endCompleto.localidade)
    setBairro(endCompleto.bairro)
}

const sumTotal = () =>{
  let newTotal = valor + taxa
  console.log(newTotal)
  console.log(newTotal.type)
  setTotal(newTotal)
}

let editedColeta = {
  idColeta: coleta[0].idColeta,
  date: date,
  time: time,
  saida: saida,
  name: name,
  age: age,
  phone: phone,
  cep: cep,
  street: street,
  bairro: bairro,
  city: city,
  number: number,
  complement: complement,
  reference: reference,
  convenio: convenio,
  valor: valor,
  taxa: taxa,
  total: total,
  pago: pago,
  acamado: acamado,
  agitado: agitado,
  auxilio: auxilio,
  doenca: doenca,
  obs: obs,
  status: status
}


  return (
    <div className='main-container'>
      <Header title="Editar Coleta" />
      <div className='container'>
        <LeftMenu />
        <div className='right-menu'>
          <div className='info-container'>
            <h4>Horario</h4>
            <div className="inputs-container">
              <div className='comun date' >
                <input className='date' type='date' placeholder='' value={date} onChange={(e) => setDate(e.target.value)}></input>
                <label className='comum-label' >Data</label>
              </div>
              <div className='comun time' >
                <input className='time' type='time' placeholder='' value={time} onChange={(e) => setTime(e.target.value)}></input>
                <label className='comum-label' >Horario</label>
              </div>

              <div className='comun'>
                <select id='saida' value={saida} onChange={(e) => setSaida(e.target.value)}>
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
              <div className={`container-rmenu name`} >
                <input className='name' type='text' label='Nome' placeholder='' value={name} onChange={(e) => setName(e.target.value)} required />
                <label className="name" >Nome</label>
              </div>
              <div className={`container-rmenu age`} >
                <input className='age' type='text' label='Idade' placeholder='' value={age} onChange={(e) => setAge(e.target.value)} required />
                <label className="age" >Idade</label>
              </div>
              <div className={`container-rmenu phone`} >
                <input className='phone' type='text' label='Telefone' placeholder='' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                <label className="phone" >Telefone</label>
              </div>
            </div>
          </div>
          <div className="info-container">
            <h4>Endereço</h4>
            <div id='adress' className="inputs-container">
              {/* <InputsCad class='cep' type='text' label='CEP' /> */}
              {/* <InputsCad class='street' type='text' label='Logradouro' /> */}
              {/* <InputsCad class='bairro' type='text' label='Bairro' /> */}
              {/* <InputsCad class='city' type='text' label='Cidade' /> */}
              {/* <InputsCad class='number' type='text' label='N°' /> */}
              {/* <InputsCad class='complement' type='text' label='Complemento' /> */}
              {/* <InputsCad class='referencia' type='text' label='Referência' /> */}

              <div className={`container-rmenu cep`} >
                <input className='cep' type='text' label='CEP' placeholder='' value={cep} onChange={(e) => setCep(e.target.value)} onBlur={pesquisaCep} required />
                <label className="cep" >CEP</label>
              </div>
              <div className={`container-rmenu street`} >
                <input className='street' type='text' label='Logradouro' placeholder='' value={street} onChange={(e) => setStreet(e.target.value)} required />
                <label className="street" >Logradouro</label>
              </div>
              <div className={`container-rmenu bairro`} >
                <input className='bairro' type='text' label='Bairro' placeholder='' value={bairro} onChange={(e) => setBairro(e.target.value)} required />
                <label className="bairro" >Bairro</label>
              </div>
              <div className={`container-rmenu city`} >
                <input className='city' type='text' label='Cidade' placeholder='' value={city} onChange={(e) => setCity(e.target.value)} required />
                <label className="city" >Cidade</label>
              </div>
              <div className={`container-rmenu number`} >
                <input className='number' type='text' label='Nº' placeholder='' value={number} onChange={(e) => setNumber(e.target.value)} required />
                <label className="number" >Nº</label>
              </div>
              <div className={`container-rmenu complement`} >
                <input className='complement' type='text' label='Complemento' placeholder='' value={complement} onChange={(e) => setComplement(e.target.value)} required />
                <label className="complement" >Complemento</label>
              </div>
              <div className={`container-rmenu referencia`} >
                <input className='referencia' type='text' label='Referencia' placeholder='' value={reference} onChange={(e) => setReference(e.target.value)} required />
                <label className="referencia" >Referencia</label>
              </div>
            </div>
          </div>
          <div className='info-container'>
            <h4>Valores</h4>
            <div className="inputs-container">
              <div className={`container-rmenu convenio`} >
                {/* <InputsCad class='convenio' type='text' label='Convenio' /> */}
                {/* <InputsCad class='valor-exame' type='text' label='Valor' /> */}
                {/* <InputsCad class='valor-taxa' type='text' label='Taxa' /> */}
                {/* <InputsCad class='valor-total' type='text' label='Total' /> */}
                <input className='convenio' type='text' label='Convenio' placeholder='' value={convenio} onChange={(e) => setConvenio(e.target.value)} required />
                <label className="convenio" >Convenio</label>
              </div>
              <div className={`container-rmenu valor-exame`} >
                <input className='valor-exame' type='number' label='Valor' placeholder='' value={valor} onChange={(e) => setValor(e.target.value)} required />
                <label className="valor-exame" >Valor</label>
              </div>
              <div className={`container-rmenu valor-taxa`} >
                <input className='valor-taxa' type='number' label='Taxa' placeholder='' value={taxa} onBlur={sumTotal} onChange={(e) => setTaxa(e.target.value)} required />
                <label className="valor-taxa" >Taxa</label>
              </div>
              <div className={`container-rmenu valor-total`} >
                <input className='valor-total' type='number' label='Total' placeholder='' value={total} onChange={(e) => setTotal(e.target.value)} required />
                <label className="valor-total" >Total</label>
              </div>
              <div className='container-rmenu'>
                <select id='pago' onChange={(e) => setPago(e.target.value)}>
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
                <select id='acamado' onChange={(e) => setAcamado(e.target.value)}>
                  <option value="yes" >Sim</option>
                  <option value="no" >Não</option>
                </select>
                <label className='comum-label'>Paciente acamado ?</label>
              </div>
              <div className='container-rmenu selects'>
                <select id='agitado' onChange={(e) => setAgitado(e.target.value)}>
                  <option value="yes" >Sim</option>
                  <option value="no" >Não</option>
                </select>
                <label className='comum-label'>Paciente agitado ?</label>
              </div>
              <div className='container-rmenu selects'>
                <select id='auxilio' onChange={(e) => setAuxilio(e.target.value)}>
                  <option value="yes" >Sim</option>
                  <option value="no" >Não</option>
                </select>
                <label className='comum-label'>Auxilio para coletora ?</label>
              </div>

            </div>
            <div className='container-rmenu textareas'>
              <div id='textareas-doenca'>
                <textarea value={doenca} onChange={(e) => setDoenca(e.target.value)} required></textarea>
                <label>Possui alguma doença ?</label>
              </div>
              <div id='textareas-obs'>
                <textarea value={obs} onChange={(e) => setObs(e.target.value)} required></textarea>
                <label>Observações</label>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='buttons right-buttons'>
              {/* <Link to={""}><button className='button'  onClick={saveColeta} name={name}>Salvar</button></Link> */}
              <Link to={"/coletasagendadas"}><Button buttonName="Salvar" tipo="editar" coleta={editedColeta} /></Link>
              <Link to={"/coletasagendadas"}><Button buttonName="Cancelar" /></Link>
              <Link to={""}><Button buttonName="Limpar" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditColeta;
