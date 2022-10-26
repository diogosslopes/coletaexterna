import './../App.css';

function InputsCad(props) {
    console.log(props.value)
    return (
        <div className={`container-rmenu ${props.class} `} >
            <input className={props.class} type={props.type} placeholder='' value={props.value} required></input>
            <label className={props.className} >{props.label}</label>
        </div>
    );
}

export default InputsCad;

