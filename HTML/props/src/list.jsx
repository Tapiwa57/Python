import React from "react";

/* topic object*/
const List =() => {
    const fruits =[{id:1,name:"Apple" ,calories: 100},
                   {id:2,name:"Banana", calories: 50},
                   {id:3,name:"Orange", calories:90},
                   {id:4,name:"Coconut", calories: 200},
                   {id:5,name:"Pineapple", calories: 200}];

    //fruits.sort((a,b)=> a.name.localeCompare(b.name)); Alphabetical//
    //fruits.sort((a,b)=> b.name.localeCompare(a.name)); revesal alphabetical//

    const listitems = fruits.map(fruits => <li key={fruits.id}>{fruits.name}:   &nbsp;
                                                            {fruits.calories}</li>);

    return(<ol>{listitems}</ol>);
}

export default List;

/* topic list
const List =() => {
    const fruits =["Apple","Banana","Orange","Coconut","Pineapple"];

    const listitems = fruits.map(fruits => <li>{fruits}</li>);

    return(<ol>{listitems}</ol>);
}*/