import React, { useEffect } from 'react'

function News(props) {
    useEffect(()=>{
       async function asdf(){
            try{
                let data=await fetch("https:jsonplaceholder.typicode.com/users")
                let data1= await data.json()
                console.log(data1)
                props.setNewData(data1) 
            }
            catch(error){
                console.log("szfdghk;",error)
            }
        }
        asdf()
    },[])

    // console.log(newData)
  return (
    <>
      <h1>News</h1>
      {props.newData.map((e)=>{
        return(
            <p>{e.email}</p>
        )       
      })}    
    </>
  )
}

export default News
