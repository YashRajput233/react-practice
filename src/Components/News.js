import React, { useContext,useEffect } from 'react'
import { ContextStore } from "../Store";
function News() {
  const storeVal =  useContext(ContextStore);
    useEffect(()=>{
       async function asdf(){
            try{
                let data=await fetch("https:jsonplaceholder.typicode.com/users")
                let data1= await data.json()
                console.log(data1)
                storeVal.setNewData(data1) 
            }
            catch(error){
                console.log("szfdghk;",error)
            }
        }
        asdf()
        // eslint-disable-next-line
    },[])

    // console.log(newData)
  return (
    <>
      <h1>News</h1>
      {storeVal.newData.map((e,i)=>{
        return(
            <p key={i}>{e.email}</p>
        )       
      })}    
    </>
  )
}

export default News
