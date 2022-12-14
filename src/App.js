import logo from './logo.png';
import './App.css';

import React, {  useState ,useEffect, useRef} from 'react';
import Messages from './component/Messeges';
import InputMessage from './component/InputMessege';
import axios from "axios"





function App() {

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([])
  const [result,setResult]=useState(0);
  const nextId = useRef(0);
  
  const getPredict = async () => {
    const result=await axios({
      url: '/predict',
      method: 'post',
      data: {
        "sentence" : message
      }
    })
    if(result.status==200){
      console.log(result.data);
      
      const post={
        'id':nextId.current,
        'message':message,
        'result': result.data
      }
      nextId.current += 1;

      console.log(">>>",post)
      setMessages(messages=>([...messages,post]));
    }else{
      //error 처리
    }
  };

  
  const  onCreate = () => {
    getPredict();
  };
  
 
  

  const onChange = e => {
    setMessage(e.target.value);
  };



let style= {
  borderRadius:"70%",
  border: "1px solid #e5e5ea",
  width: "50px",
  height: "50px",
} 


  return (
    
    <div className="App">

      <div className="imessage" style={{margin:"5%"}}>
      <p className="from-them" style={{marginLeft: 3+"em"}}>이쁜말 고운말을 씁시다.</p>
      {messages.map(m => (
        <Messages message={m.message} result={m.result}  key={m.id}/>      ))}
        <img src={logo} style={style} />
      </div>

      <InputMessage  
      message={message}
        onChange={onChange}
        onCreate={onCreate}/>
      
    </div>
  );
}

export default App;
