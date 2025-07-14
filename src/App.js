import React, { useState } from "react";
import Hero_section from "./components/Hero_section/Hero_section";
import About from "./components/About/About";
import Reviews from "./components/Reviews/Reviews.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
    return (
        <div>
            <Hero_section />
            <About />
            <Reviews />
            <Contact />
        </div>
    );
}

export default App;
