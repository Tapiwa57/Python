import Button from "./Buttons";
import Messages from "./Messages";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./list"
import Buttons from "./Buttons";
import MyComponent from "./MyComponent";
import Counter from "./Counter";


function App() {
  return(
    <>
    <Messages/>
    <Student name="Tapiwa Ndemera" Age= {30} isStudent ={true}/>
    <Student name="Tafadzwa Tsvimbo" Age= {43} isStudent ={false}/>
    <Student name= "Lorraine"/>
    <UserGreeting isloggedIn ={false} username= "Tapiwa"/>
    <List/>  
    <Buttons/>
    <MyComponent/>
    <Counter/>
    </>
  )
};


export default App;