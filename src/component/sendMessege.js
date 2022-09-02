import '../App.css';

function SendMessage(props) {  
    
    return (

        <p className="from-me" style={{marginRight: 3+"em"}}>{props.message}</p>

    );
}

export default SendMessage;
