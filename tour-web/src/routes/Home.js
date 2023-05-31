import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Destination from "../components/Destination"
import Trip from "../components/Trip"
import Footer from "../components/Footer";
import Main from "../assets/Main.jpg";
function Home()
{
return(
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg={Main}
    title="My Journey My Story"
    text="Choose Your Destination."
    buttonText="Travel Plan"
    url="/"
    btnClass="show"
    />
    <Destination/>
    <Trip/> 
    <Footer/>
    </>
)
}
export  default Home;