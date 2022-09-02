import '../App.css';

function ResponseMessage(props) {  
    
    return (

        <p className="from-them" style={{marginLeft: 3+"em"}}>{props.result==0 ? "CLEAN 😊":"HATE 😡"}</p>

    );
}

export default ResponseMessage;
