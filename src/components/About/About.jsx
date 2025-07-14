import React from 'react';
import './About.css';
import {motion} from "framer-motion";

const About = () => {
    return (
        <div className="about-container" id="about">

<motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className='about-content about-content-1'  >
            <h2>О курсе:</h2>
            <ul className='about-list'>
                <li>Курс итальянского языка для начинающих.</li>
                <li>Занятия проводятся опытными преподавателями.</li>
                <li>Уроки 3 раза в неделю.</li>
                <li>Доступ к записям занятий.</li>
            </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className='about-content about-content-2'>
            <ul>
                <li><h2>📅 Неделя 1 — Уверенный старт</h2>
            <p>Погружаемся в язык мягко и с интересом:</p>
            </li>
            <li>
                <h2>📅 Неделя 2 — О себе и своём мире</h2>
                <p>Ты учишься говорить о семье, профессии и ежедневных делах:</p>
            </li>
            <li>
                <h2>📅 Неделя 3 — Гуляем по Италии</h2>
                <p>Отправляемся в город, кафе, магазины — учим то, что пригодится каждому туристу:</p>
            </li>
            <li>
                <h2>📅 Неделя 4 — Практика жизни</h2>
                <p>Завершаем месяц полноценным разговорным блоком:</p>
            </li>
            </ul>
        </motion.div>

        </div>
    );
};

export default About;
