import React from "react";
import { useState,useRef,useContext} from "react";
import { ContextStore } from "../Store";
function Form(props) {
  const storeVal =  useContext(ContextStore);
  const [isvisible, setVisible] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const refec =useRef()
  // const[num,setNum]=useState(0)
  const onChangehandler = (e) => {
    setVisible(e.target.value);
  };
  const onclickhandler = () => {
    storeVal.addData({
      email:isvisible
    })
    if (isvisible === "") {
      alert("write a something");
    } else {
      setVisible("");
      refec.current.focus()
      setToDoList([...toDoList, isvisible]);
      // console.log(...toDoList);
    }
  };

  // const increase=()=>{
  //   setNum(num+1)
  // }
  // const decrease=()=>{
  //   setNum(num-1)
  // }

  return (
    <>
      <h1>Form</h1>
      <input
        type="text"
        ref={refec}
        value={isvisible}
        onChange={onChangehandler}
        placeholder="write a list"
      />
      <button onClick={onclickhandler}>Add</button>
      {toDoList.map((ele) => (
        <li>{ele}</li>
      ))}
      {/* <h1>{num}</h1>
    <button onClick={increase}>increase</button>
    <button onClick={decrease}>increase</button> */}
    </>
  );
}

export default Form;
