import './App.css';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
// "syntax extension to javascrit"

function App() {
  return (
    <div className="App">
    <Navbar heading="New Images" img="https://t3.ftcdn.net/jpg/05/68/49/90/240_F_568499083_q9QfafI1PkGJA8QQMIpiTT557xUUJ4Qq.jpg"/>
    <br/>
    <Form />
    </div>
  );
}
export default App;
