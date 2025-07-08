import React, {useState} from "react";


function MyComponent(){
    //using usestate Hook method

    const [name, setName] = useState("Guest");
    const [Age, setAge] = useState(0);
    const [isEmployed, setisEmployed] = useState(false)

    const updateName = () => {
        setName("Tapiwa Ndemera");
    }

    
    const incrementAge = () => {
        setAge(Age + 1);
    }

    const toggleEmployedstatus = () => {
        setisEmployed(!isEmployed)
    }



    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {Age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>IsEmployed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedstatus}>Toggle status</button>


        </div>
    );

}


export default MyComponent;