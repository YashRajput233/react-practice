import React from 'react'

function Navbar(props) {
  return (
    <>
      <h1>{props.heading}</h1>
      <img src={props.img} alt="img" />
    </>
  )
}
export default Navbar
