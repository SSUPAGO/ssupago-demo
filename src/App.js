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
  
  useEffect(() => {
    const fetchData = async () => {
     // setIsError(false);
     // setIsLoading(true);
     console.log("fetchData")
      try {
        const response = await axios({
          url: 'https://aae2-218-232-197-126.jp.ngrok.io/predict',
          method: 'post',
          data: {
            "sentence" : message
          }
        }); //클래스에서 사용하는 stock가져와야함
        setResult(response.data);
      } catch (error) {
       // setIsError(true);
      }
      //setIsLoading(false);
    };
    console.log("fetchData result", result)

    fetchData();
    return () => { };
  }, [nextId.current]);
 
  const getPredict = async () => {
    await axios({
      url: 'https://aae2-218-232-197-126.jp.ngrok.io/predict',
      method: 'post',
      data: {
        "sentence" : message
      }
    })
    .then(function a(response) { 
      console.log("response",response.data)
      setResult(response)
    })
    .catch(function (error) {
      console.log("error",error);
    });
  };

  
  const  onCreate = () => {
    nextId.current += 1;
        
    const post={
      'id':nextId.current,
      'message':message,
      'result': result.data
    }

    console.log(post)
    setMessages(messages=>([...messages,post]));
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
