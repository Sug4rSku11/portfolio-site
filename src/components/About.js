import React from 'react';
import Me from '../components/Images/Image.png'
import figma from './Images/figma.jpg'
import html from './Images/html.png'
import css from './Images/css.png'
import js from './Images/js.png'
import react from './Images/react.png'
import nextjs from './Images/nextjs.svg'
import sketch from './Images/sketchbook.png'
import mysql from './Images/mysql.webp'
import python from './Images/python.png'
import express from './Images/Expressjs.svg'

const About = () => {
    return (
        <div className="about">
          <div className="about-img">
          <img src={Me}></img>
          </div>
          <div className="me">
            <h4>Hi, I'm Desiree!</h4>
            <p> I am a Fullstack Web Developer, proficient in both
              Frontend and Backend programming languages.
            </p>
          </div>
          <div className='code'>
              <img className='code-img' src={html}></img>
              <img className='code-img' src={css}></img>
              <img className='code-img' src={js}></img>
              <img className='code-img' src={react}></img>
              <img className='code-img' src={nextjs}></img>
              <img className='code-img' src={express}></img>
              <img className='code-img' src={mysql}></img>
              <img className='code-img' src={python}></img>
              <img className='code-img' src={figma}></img>
              <img className='code-img' src={sketch}></img>
            </div>
        </div>
    )
}
export default About;

/**
 * With an unwavering drive and a passion for learning, I am primed
              to tackle new challenges head-on. Recognizing the ever-evolving nature
               of the web development sphere, I place great significance on staying
                abreast of the lates trends and innovations. My dedication to ongoing
                 education propels me to not only attain industry certifications but 
                 also actively pursue advanced training avenues. Empracing growth as 
                 a lifelong journey, I am committed to honing my skills and expertise 
                 to provide top-notch services that reflect both current knowledge and 
                 forward-looking proficiency.
 * 
 */