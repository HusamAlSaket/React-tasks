import react, {useState} from 'react';
export default function Counter() {

    const [car,setCar]=useState
        ({year:2024,
        make:"Ford",
        model:"Mustang"});

    const [count,setCount]=useState(0);
    const increment =() => {
        setCount(c =>c+1);
        setCount(c =>c+1);
        setCount(c =>c+1);
    }
    const decrement=()=>{
        // updater function allow for safe updated based on the previous state
        setCount(c=>c-1);
        setCount(c=>c-1);
        setCount(c=>c-1);
    }
    const reset=()=>{
        setCount(0);
    }
    
    function handleYearChange(event){
        // using spread operator to retrieve old properties
        setCar(c=>({...c,year:event.target.value}));
    }
    function handleMakeChange(event){
        setCar(c=>({...c,make:event.target.value}));
    }
    function handleModelChange(event){
        setCar(c=>({...c,model:event.target.value}));
    }


return (
    <>

    <div className="counter-container">
        <p className='count-display'>{count}</p>
        <button className='counter-button' onClick={decrement}>Decrement</button>
        <button className='counter-button' onClick={reset}>reset</button>
        <button className='counter-button' onClick={increment}>increment</button>


    </div>
    <div>
        <p>Your Favorite car is: {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange}  /><br />
        <input type="text" value={car.make} onChange={handleMakeChange}  /><br />
        <input type="text" value={car.model} onChange={handleModelChange}  /><br />


    </div>
    </>
)
}
