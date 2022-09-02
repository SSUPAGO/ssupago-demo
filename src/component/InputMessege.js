import '../App.css';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function InputMessage({ message, onChange, onCreate }) {  
    const enterPress=(e)=>{
        if (e.key=="Enter") {onCreate()}
    }
    
    return (

        <div style={{margin:"5%", textAlign: "center"}}>
            <input type="text" placeholder="text messege" required="required" onChange={onChange} value={message} onKeyPress={enterPress}/>
            <button className="button" onClick={onCreate}>
            <FontAwesomeIcon icon={faArrowUp} color="white" size="lg" /></button>
        </div>

    );
}

export default InputMessage;
