import React, { useEffect,useState } from "react";

function Newnews() {
  const [data, setData] = useState("");
  const [array, setArray] = useState([]);
  const[newData,setNewData]=useState([])
  useEffect(()=>{
    async function asdf(){
         try{
             let data=await fetch("https:jsonplaceholder.typicode.com/users")
             let data1= await data.json()
             console.log(data1)
             setNewData(data1) 
         }
         catch(error){
             console.log("szfdghk;",error)
         }
     }
     asdf()
 },[])

  const onChangeHandler = (e) => {
    setData(e.target.value);
  };

  const onClickHandler = () => {
    setData("")
    setArray([...array, data]);
    setNewData([...newData,{name:data}])
  };
  return (
    <>
      <input type="text" onChange={onChangeHandler} value={data} />
      <button onClick={onClickHandler}>Add</button>
      {array.map((e) => (
        <li>{e}</li>
      ))}
      <br/>
      _______________________________________________________________
      {newData.map((e) => (
        <li>{e.name}</li>
      ))}
    </>
  );
}

export default Newnews;
