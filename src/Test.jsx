import React, { useState, useEffect } from "react";

export default function Test() {

  const[count,setCount]=useState(0);
  const[color,setColor]=useState("green");
  // good for defining when the code runs kinda of a side code
  useEffect(() => {
    document.title =`Count: ${count} ${color}`;
  },[count,color]);

  

  function addCount(){
    setCount(c => c+1);
  }
  function subtractCount(){
    setCount(c => c-1);
  }

    function changeColor(){
      setColor(c=>c ==="green" ? "red" :"green");
    }




  return <>
  <p style={{color:color}}>Count:{count}</p>
  {/* <p>Color:{color}</p> */}
  <button onClick={addCount}>Add</button>
  <button onClick={subtractCount}>Subtract</button><br />
  <button onClick={changeColor}>changeColor</button><br />

  
  
  </>;

}
