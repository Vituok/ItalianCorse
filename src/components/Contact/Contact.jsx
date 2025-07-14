import React from "react";
import "./Contact.css"; // Assuming you have a CSS file for styling

const Contact = () => {
    return (
        <div className="contact-container" id="contact">
            <h2>Контакты</h2>
            <p>Если у вас есть вопросы, пожалуйста, свяжитесь с нами:</p>
            <ul className="contact-list">
                <li><a href="https://www.instagram.com/Vituok_ph" target="_blank" rel="noopener noreferrer">Instagram: @Vituok.It</a></li>
                <li><a href="mailto:Vituok.ph@gmail.com">Email: Vituok.ph@gmail.com</a></li>
                <li><a href="tel:+15182388403">Телефон: +1 (518)2388403</a></li>
            </ul>
        </div>
    );
};

export default Contact;
