
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [name,setName]=useState("");
  function Changename(e){
    setName(e.target.value);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your Name: </p>
        <input type="text" onChange={Changename}/>
        {
          name&&(
            <p>Hello {name}!</p>
          )
        }
    </div>
  )
}

export default App
