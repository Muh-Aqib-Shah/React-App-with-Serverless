import React, { useEffect, useState } from 'react'
import './App.css';

function App() {

  let [data,setData] = useState("")
 
  useEffect(() => {
    (async () => {
      let resp = await fetch(".netlify/functions/hello")
      let response = await resp.json()
      setData(response)
  })()
  },[])
  

  return (
    <div className="App">
     <div>Hello From Aqib</div>
     <div>{data.message}</div>
    </div>
  );
}

export default App;
