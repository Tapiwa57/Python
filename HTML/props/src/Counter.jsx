import React, {useState} from "react";


function Counter(){

    const [count, setCount] = useState(0);

    const Increment = () =>{
        setCount(count + 1);
    }

    const decrement  = () =>{
        setCount(count - 1);
    }

    const reset = () =>{
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={Increment}>Increment</button>
            <button className="counter-button"onClick={decrement}>decrement</button>
            <button className="counter-button"onClick={reset}>reset</button>
        </div>

    );
}

export default Counter;