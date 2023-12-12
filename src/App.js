import './App.css';
// import { useState } from 'react';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {GlobalContextProvider} from "./Store"

function App() {
 
  return (
    <GlobalContextProvider>
    <div className="App">
    <Navbar heading="New Images" img="https://t3.ftcdn.net/jpg/05/68/49/90/240_F_568499083_q9QfafI1PkGJA8QQMIpiTT557xUUJ4Qq.jpg"/>
    <br/>
    <Form />
    <News/>
    <br/>
    {/* <Newnews /> */}
    </div>
    </GlobalContextProvider>
  );
}
export default App;
