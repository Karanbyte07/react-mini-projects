import { useState } from "react";
function IncreaseCount() {
    let [counter, setCounter] = useState(15); //counter is name and setcounter is method

    //function to increase value
    const addValue = () =>{
        counter = counter + 1;
        setCounter(counter);
    }

     //function to decrease value
    const removeValue = () =>{
        setCounter(counter - 1);
    }

    return(
        <div>
            <h1>This is Increase and Decrease counting mini project</h1>
            <button onClick={addValue}>Add Value {counter}</button> 
            <br />
            <button onClick={removeValue}>Decrease Value {counter}</button>
        </div>
    )
    
}
export default IncreaseCount;
