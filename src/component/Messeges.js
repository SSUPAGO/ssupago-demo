import ResponseMessage from "./responseMessege";
import SendMessage from "./sendMessege";

function Messages(props) {  
    
    return (

        <div className="imessage" style={{margin:0}}>
            <SendMessage message={props.message}/>
            <ResponseMessage result={props.result}/>
        </div>

    );
}

export default Messages;
