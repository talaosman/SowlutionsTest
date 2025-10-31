import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
const Data=["React make it painless to create interactive UIs.",
"Design simple views for each state in your application.",
"React will efficiently update and render just the right components when your data changes.",
]
const [searchterm, setSearchterm]=useState("");
const highlight=(text,searchterm)=>{
  if(!searchterm){
    return text;
  }
  const parts=text.split(new RegExp(`(${searchterm})`,'gi'));
  return parts.map((part,index)=>
  part.toLowerCase()===searchterm.toLowerCase() ? <mark key={index}>{part}</mark> : part
  );
}
return (
  <div style={{padding:"30px", fontFamily:"Arial"}}>
    <h2>Search</h2>
    <input type="text" placeholder="Type to search..." onChange={(e)=>setSearchterm(e.target.value)} style={{padding:"8px", width:"300px", marginBottom:"20px"}}/>
    {Data.filter(item=>item.toLowerCase().includes(searchterm.toLowerCase())).map((item,index)=>(
      <p key={index} style={{fontSize:"18px", lineHeight:"1.6"}}>{highlight(item,searchterm)}</p>
    ))}
  </div>
    
)
}

export default App;
