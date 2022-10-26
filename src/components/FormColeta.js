import './../App.css';
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom'
// import InputsCad from './InputsCad';

function FormColeta() {

 
  const coletas = JSON.parse(localStorage.getItem("coletasAgendadas"))
 
  useEffect(()=>{
    setSaida(document.querySelector("#saida").value)
    setPago(document.querySelector("#pago").value)
    setAcamado(document.querySelector("#acamado").value)
    setAuxilio(document.querySelector("#auxilio").value)
    setAgitado(document.querySelector("#agitado").value)
    
  },[])

  if(coletas == null){
    localStorage.setItem("coletasAgendadas", "[]")
    
  }

  const pesquisaCep = async() =>{
    const url = `http://viacep.com.br/ws/${cep}/json/`
    const dadosCep = await fetch(url)
    const endCompleto = await dadosCep.json()
    console.log(endCompleto)
    setStreet(endCompleto.logradouro)
    setCity(endCompleto.localidade)
    setBairro(endCompleto.bairro)
    

}
  

  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [saida, setSaida] = useState()
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [phone, setPhone] = useState()
  const [cep, setCep] = useState()
  const [street, setStreet] = useState()
  const [bairro, setBairro] = useState()
  const [city, setCity] = useState()
  const [number, setNumber] = useState()
  const [complement, setComplement] = useState()
  const [reference, setReference] = useState()
  const [convenio, setConvenio] = useState()
  const [valor, setValor] = useState()
  const [taxa, setTaxa] = useState()
  const [total, setTotal] = useState()
  const [pago, setPago] = useState()
  const [acamado, setAcamado] = useState()
  const [agitado, setAgitado] = useState()
  const [auxilio, setAuxilio] = useState()
  const [doenca, setDoenca] = useState()
  const [obs, setObs] = useState()
  const [status, setStatus] = useState("agendada")
  
  let coleta = {
    idColeta: coletas.length,
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

  const sumTotal = () =>{
    let newTotal = valor + taxa
    console.log(newTotal)
    console.log(newTotal.type)
    setTotal(newTotal)
  }  


  return (
    <div className='right-menu'>
      <div className='info-container'>
        <h4>Horario</h4>
        <div className="inputs-container">
          <div className='comun date' >
            <input className='date' type='date' placeholder='' onChange={(e) => setDate(e.target.value)}></input>
            <label className='comum-label' >Data</label>
          </div>
          <div className='comun time' >
            <input className='time' type='time' placeholder='' onChange={(e) => setTime(e.target.value)}></input>
            <label className='comum-label' >Horario</label>
          </div>

          <div className='comun'>
            <select id='saida' onChange={(e) => setSaida(e.target.value)}>
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
            <textarea value={obs} onChange={(e) => setObs(e.target.value)}  required></textarea>
            <label>Observações</label>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='buttons right-buttons'>
          {/* <Link to={""}><button className='button'  onClick={saveColeta} name={name}>Salvar</button></Link> */}
          <Link to={"/coletasagendadas"}><Button buttonName="Salvar" tipo="save" coleta ={coleta}  /></Link>
          <Link to={"/coletasagendadas"}><Button buttonName="Cancelar" /></Link>
          <Link to={""}><Button buttonName="Limpar" /></Link>

          
        </div>
      </div>
    </div>
  );
}

export default FormColeta;
