import React from "react";



const Student = (props) => {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.Age}</p>
            <p>Student: {props.isStudent ? "Yes": "No"}</p>
        </div>
    );
}
Student.defaultProps ={
    name: 'Guest',
    Age: 0,
    isStudent: false
}


export default Student;