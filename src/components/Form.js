import React from 'react'

const Form = (props) => {

  console.log(props);
  


  return (
    <form action="">
      <input type="text" id="searchInput" value={props.value} onChange={props.change} /> 
      <label htmlFor="searchInput">Wyszukaj coś</label>
    </form>
  )
}

export default Form;