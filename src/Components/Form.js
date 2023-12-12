import React, { useReducer } from "react";
import { useState, useRef, useContext } from "react";
import { ContextStore } from "../Store";

let init = {count:0};
const changenum = (state, action) => {
  if (action.type === "increment") {
    return {count:state.count++ + action.value}
  } else if (action.type === "decremet") {
    return {count:state.count--}
  } else {
    return {count:state};
  }
};

function Form() {
  const storeVal = useContext(ContextStore);
  const [isvisible, setVisible] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const refec = useRef();

  const [state, dispatch] = useReducer(changenum, init);

  // console.log("state ==> 2", val);

  const onChangehandler = (e) => {
    setVisible(e.target.value);
  };
  const onclickhandler = () => {
    storeVal.addData({
      email: isvisible,
    });
    if (isvisible === "") {
      alert("write a something");
    } else {
      setVisible("");
      refec.current.focus();
      setToDoList([...toDoList, isvisible]);
      // console.log(...toDoList);
    }
  };

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
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 4 });
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decremet", value: 4 });
        }}
      >
        decremet
      </button>
    </>
  );
}

export default Form;
