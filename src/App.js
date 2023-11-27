import './App.css';
import { useState } from 'react';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import News from './Components/News';
import Newnews from './Components/Newnews';
// "syntax extension to javascrit"

function App() {
  const[newData,setNewData]=useState([])
  const addData=(item)=>{
    setNewData([...newData,item])
  }
  return (
    <div className="App">
    <Navbar heading="New Images" img="https://t3.ftcdn.net/jpg/05/68/49/90/240_F_568499083_q9QfafI1PkGJA8QQMIpiTT557xUUJ4Qq.jpg"/>
    <br/>
    <Form addData={addData}/>
    <News newData={newData} setNewData={setNewData}/>
    <br/>
    {/* <Newnews /> */}
    </div>
  );
}
export default App;
