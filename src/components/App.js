
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
   const [click , setclick] =useState(0)
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {click} times</p>
        <button onClick={()=>setclick(click+1)}>Click me</button>
    </div>
  )
}

export default App
