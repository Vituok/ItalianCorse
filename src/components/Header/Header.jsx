import React from "react";
import "./Header.css"; // Assuming you have a CSS file for styling

function Header() {
    return (
        <header className="header">
        
               
                   <a href="#home">Главная</a>
                   <a href="#about">О курсе</a>
                    <a href="#reviews">Отзывы</a>
                   <a href="#contact">Контакты</a>
            
        </header>
    );
}

export default Header;