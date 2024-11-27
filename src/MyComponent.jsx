import React, {useState} from 'react';

export default function MyComponent() {

const [name,setName]=useState("Guest");  
const [age,setAge]=useState(0);
const [isEmployed,setIsEmployed]=useState(false);

const updateName =()=>{
    setName("sora");
}
const incrementAge=()=>{
    setAge(age+2);
}
const toggleEmployedStatus=()=>{
    setIsEmployed(!isEmployed);
}

return(<div>
    <p>Name:{name}</p>
    <button onClick={updateName}>Set Name</button>
    <p>Age:{age}</p>
    <button onClick={incrementAge}>increment Age</button>
    <p>Is Employed:{isEmployed ? "yes" :"no"}</p>
    <button onClick={toggleEmployedStatus}>Toggle status</button>
    

    </div>
    
)
}
