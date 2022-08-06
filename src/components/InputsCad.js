import './../App.css';

function InputsCad(props) {
    return (
        <div className={`container-rmenu ${props.class} `} >
            <input className={props.class} type={props.type} placeholder='' required></input>
            <label className={props.className} >{props.label}</label>
        </div>
    );
}

export default InputsCad;

