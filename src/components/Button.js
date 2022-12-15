import './../App.css';

function Button(props) {

  const saveColeta = () =>{
    console.log(props.tipo)
    const coletasAgendadas = localStorage.getItem("coletasAgendadas")
    const coletasFinalizadas = localStorage.getItem("coletasFinalizadas")
    let coletas = JSON.parse(coletasAgendadas) || []
    let coletasRealizadas = JSON.parse(coletasFinalizadas) || []

  if(props.tipo === "save"){
    coletas.push(props.coleta)
    localStorage.setItem("coletasAgendadas", JSON.stringify(coletas))
  } else if(props.tipo === "delete"){    
    const filterColetas = coletas.filter((c) => props.idcoleta !== c.idColeta)
    localStorage.setItem("coletasAgendadas", JSON.stringify(filterColetas))
  }else if(props.tipo === "finalizar"){
    const filterColetas = coletas.filter((c) => props.idcoleta !== c.idColeta)
    const filterColetasRealizadas = coletas.filter((c) => props.idcoleta === c.idColeta)
    coletasRealizadas.push(filterColetasRealizadas[0])
    localStorage.setItem("coletasAgendadas", JSON.stringify(filterColetas))
    localStorage.setItem("coletasFinalizadas", JSON.stringify(coletasRealizadas))
    console.log('finalizado')
    console.log(filterColetasRealizadas)
  }else if(props.tipo === "editar"){
    const filterColetas = coletas.filter((c) => props.coleta.idColeta !== c.idColeta)
    console.log(props.coleta.idColeta)
    console.log(filterColetas)
    localStorage.setItem("coletasAgendadas", JSON.stringify(filterColetas))
    coletas.push(props.coleta)
    localStorage.setItem("coletasAgendadas", JSON.stringify(coletas))
  }
 }


  return (
   <button className='button' onClick={saveColeta} >{props.buttonName} </button>
  );
}

export default Button;
