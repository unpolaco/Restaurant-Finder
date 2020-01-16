import React from 'react'

const Form = (props) => {

  console.log(props);
  
  return (
    <form onSubmit={props.submit}>
      <input type="text" id="searchInput" value={props.value} onChange={props.change} placeholder= "Wpisz miasto" /> 
      <button>Wyszukaj coś</button>
      
    </form>
  )
}

export default Form;