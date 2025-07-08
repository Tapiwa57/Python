import React from "react";


const Buttons =() =>{

    const handleclick = () => console.log("Ouch!");

    const handleclick2 =(name) => console.log( '${name} stop click')

    return(<button onClick={() => handleclick2("Tapiwa")}>Click me</button>)
    
}

export default Buttons;