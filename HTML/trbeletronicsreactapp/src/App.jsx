import './App.css'
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Categories from "./components/Categories";
import Explore from './components/Explore';
import Footer from './components/Footer';
import Copyright from './components/Copyright';



function App() {
    return(
        <>
        <NavBar/>
        <Hero/>
        <Welcome/>
        <Categories/>
        <Explore/>
        <Footer/>
        <Copyright/>
        </>
    );
}



export default App;