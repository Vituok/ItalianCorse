import React from "react";
import photo from "./men.jpg"; // Adjust the path as necessary
import {motion} from "framer-motion";


import "./Hero_section.css"; // Assuming you have a CSS file for styling
import Header from "../Header/Header";
const Hero_section = () => {
    return (
        
        <div>
            <div><Header /></div>
            <div className="hero-section" id="home">
                <div>
                    <h1>Выучи итальянский с нуля за <span>30 дней</span>!</h1>
                    <p>Практика с носителем, занятия Online и доступ ко всем записям навсегда</p>
                    <motion.button initial={{translateY:-50, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{zIndex:1}}>Записаться на курс</motion.button>
                </div>
            <motion.img  className="hero-image" initial={{opacity: 0, scale: 1.2, transform: "translateX(100px)" }} animate={{ opacity: 1, scale: 1, transform: "translateX(0)" }} transition={{ duration: 1 }} style={{zIndex:2}} src={photo} alt="Men" />
        </div>
        </div>
    );
};
export default Hero_section;