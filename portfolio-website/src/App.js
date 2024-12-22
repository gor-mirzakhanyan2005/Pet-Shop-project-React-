import Navigation from "./components/Navigation.js";
import RecentOffers from "./components/RecentOffers.js";
import AllOffers from "./components/offer pages/allOffers.js";
import AllOffers2 from "./components/offer pages/allOffers2.js";
import AccessorySection from "./components/petAccessories.js";
import Footer from "./components/Footer.js";
import Contact from "./components/contactModal.js";
import About from "./components/About.js";
import Add from "./components/AddListing.js";
import DarkModeButton from "./components/DarkModeToggle.js";
import Testimonials from "./components/Testimonials.js";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useState } from "react";
import './App.module.css';
import { use } from "react";

function App(props) {

   // Component states
   const [contact, setContact] = useState(false)
   const [about, setAbout] = useState(false);
   const [listings, setListings] = useState(false);
   const [darkMode, setDarkMode] = useState(false);

   const contactToggle = () => {
      setContact(!contact);
      setAbout(false);
      setListings (false);
   }
   const aboutToggle = () => {
      setAbout(!about);
      setContact(false);
      setListings (false);
   }
   const listingsToggle = () => {
      setListings(!listings);
      setContact(false);
      setAbout(false);
   }
   const toggleDarkMode = function() {
      setDarkMode(!darkMode);
    }

   const testimonialData = [

      {
          stars: "★★★★★",
          title: "Max",
          name: "John Doe",
          desc: "man 2",
          text: ' "I never thought I’d have to give up my dog, Max, but life got tough, and I couldn’t afford his care anymore. This website made it so easy to find him a new loving home." ',      
      },

      {
          stars: "★★★★★",
          title: "Bobby",
          name: "Jane Doe",
          desc: "yey",
          text: ' "We were looking for a cat, but adoption fees from shelters were out of our budget. This site connected us with someone who just needed to rehome their adorable tabby, Luna. She’s been such a blessing to our family, and we couldn’t be happier!" ',
      },

      {
          stars: "★★★★★",
          title: "Augustus",
          name: "Joe Doe",
          desc: "ifaddntbinforcottonahjoe",
          text: ' "I’ll admit, my guinea pig and I just didn’t click. He’s sweet, but I realized I’m more of a dog person. This site was a lifesaver! I found him a home with someone who absolutely adores guinea pigs, and I’m now looking for my dream dog. Win-win!" ',
      },
  ];

  return (
    <BrowserRouter>
    <div data-theme={darkMode ? "dark" : "light"}>
    {contact && <Contact contactToggle={contactToggle}/>}
    {listings && <Add listingsToggle={listingsToggle}/>}
    {!listings &&
    <Navigation
    contactToggle={contactToggle}
    aboutToggle={aboutToggle}
    listingsToggle={listingsToggle}
    darkMode={darkMode}
    setDarkMode={setDarkMode}/>
    }
    {about && (
    <>
      <About darkMode={darkMode} aboutToggle={aboutToggle}/>
      <Testimonials darkMode={darkMode} testimonialData={testimonialData}/>
      <Footer />
    </>
   )}
    {!listings && !about && <RecentOffers darkMode={darkMode}/>}
    <Routes>
    {!listings && !about && <Route path="/" element={<AllOffers darkMode={darkMode}/>} />}
    {!listings && !about && <Route path="/page2" element={<AllOffers2 darkMode={darkMode}/>}></Route>}
    </Routes>
    {!listings && !about && <AccessorySection darkMode={darkMode}/>}
    {!listings && !about && <Footer darkMode={darkMode}/>}
    </div>
    </BrowserRouter>
  );
}

export default App;
