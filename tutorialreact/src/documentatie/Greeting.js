import React from 'react';
import ReactDom from 'react-dom';

function Greeting(){
  return ( 
    <div>
      <Person/>
      <Message/>
    </div>
  )
}

const Person = ()=><h1>hallo jack</h1>
const Message = ()=><h2>messageline</h2>
ReactDom.render(<Greeting/>,document.getElementById('root'));