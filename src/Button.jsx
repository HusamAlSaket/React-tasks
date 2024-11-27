
export default function Button() {
    // let count =0;
    const handleClick=(e)=>e.target.textContent="OUCH!";

        // if(count<3){
        //     count++;
        //     console.log(`${name} you clicked me ${count} time/s`);
        // }else{
        //     console.log(`${name} stop clicking me`);
        // }
        return (
            <button onDoubleClick={(e)=>handleClick(e)}>😒</button>);
        
    }
    // const handleClick=()=> console.log("OUCH!");
    // const handleCLick2=(name)=> console.log(`${name} stop clicking me`);





