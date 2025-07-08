/*topic is called Rendering condition*/

import React from "react";

const UserGreeting=(props)=>{
 
    return(props.isloggedIn ?  <h2>Welcome {props.username}</h2>: <h2>Please login</h2>);

}

export default UserGreeting;



/* Or You can use these format- if(props.isloggedIn){
        return <h2>Welcome {props.username}</h2>
    }
    else {
        return <h2>Please login</h2>
    }*/

