import React,{useEffect, useState} from 'react'
import { motion, useIsPresent } from "framer-motion";
import { Link } from "react-router-dom"
import Navbar from '../component/Navbar';
import PageCursor from '../component/PageCursor';
import { FaBeer } from 'react-icons/fa';
import { DiJavascript1, DiReact,DiNodejs, DiMongodb, DiGithubBadge } from 'react-icons/di';
import { SiMongodb, SiMaterialui, SiFirebase } from 'react-icons/si';
import { TbBrandNextjs, TbBrandCss3 } from 'react-icons/tb';


const MySkills = () =>{
  return(
    <>
      <div id="portfolio-content">
        <div className="portfolio portfolio-first">
            <div className="portfolio-image">
            <img src="images/1cc26945351745.582d9ddfef518.jpg" alt="portfolio-first" />
            </div>
            <div className="portfolio-text">
            <h2>Smart Vending App</h2>
            <p>A smart vending machine, built with React and Electron, offers a modern twist on a traditional concept. Using cutting-edge technology, our machine delivers a seamless user experience, complete with touch screen interface and real-time inventory tracking. Whether you're looking to automate your business or simply offer a fun and innovative way to dispense products, our smart vending machine has you covered</p>
            {/* <div className="button"><a href="#"><button><span className="index"> View Project<i className="gg-arrow-right" /></span></button></a></div> */}
            </div>
        </div>
        <div className="portfolio portfolio-second">
            <div className="portfolio-image">
            <img src="images/Coloshop-Free-Bootstrap-eCommerce-Website-Template.jpg" alt="portfolio-second" />
            </div>
            <div className="portfolio-text">
            <h2>Ecommerce Site</h2>
            <p>Our ecommerce site, built with React, Node.js, MongoDB, and Redux, offers a comprehensive and user-friendly online shopping experience. Featuring a sleek and intuitive interface, our site allows users to easily browse products, add items to their cart, and securely checkout. With robust inventory management and order processing capabilities, our ecommerce site is the perfect solution for businesses looking to expand their online presence</p>
            {/* <div className="button"><a href="#"><button><span className="index"> View Project<i className="gg-arrow-right" /></span></button></a></div> */}
            </div>
        </div>
        <div className="portfolio portfolio-third">
            <div className="portfolio-image">
            <img src="images/Screenshot 2023-05-07 175038.png" alt="portfolio-third" />
            </div>
            <div className="portfolio-text">
            <h2>Doctor's appointment Dashboard</h2>
            <p>Our doctor's appointment dashboard, built with React, Firebase, and Ant Design, streamlines the appointment booking process for medical professionals and patients alike. With its intuitive interface and real-time data updates, our dashboard allows doctors to efficiently manage their appointments and patients to easily schedule and modify their bookings. Featuring robust authentication and authorization capabilities, our dashboard ensures the privacy and security of sensitive medical information</p>
            {/* <div className="button"><a href="#"><button><span className="index"> View Project<i className="gg-arrow-right" /></span></button></a></div> */}
            </div>
        </div>
        <div className="portfolio portfolio-fourth">
            <div className="portfolio-image">
            <img src="images/preview.png" alt="portfolio-fourth" />
            </div>
            <div className="portfolio-text">
            <h2>Doctor's appointment Dashboard</h2>
            <p>Our doctor's appointment dashboard, built with React, Firebase, and Ant Design, streamlines the appointment booking process for medical professionals and patients alike. With its intuitive interface and real-time data updates, our dashboard allows doctors to efficiently manage their appointments and patients to easily schedule and modify their bookings. Featuring robust authentication and authorization capabilities, our dashboard ensures the privacy and security of sensitive medical information</p>
            {/* <div className="button"><a href="#"><button><span className="index"> View Project<i className="gg-arrow-right" /></span></button></a></div> */}
            </div>
        </div>
        <div className="portfolio portfolio-fifth">
            <div className=" portfolio-image">
            
            <img src="images/Screenshot 2023-05-07 174557.png" alt="portfolio-fifth" />
            </div>
            <div className="portfolio-text">
            <h2>Tic Tac Toe </h2>
            <p>Our Tic Tac Toe game, built with ReactJS and Framer Motion, offers a fun and interactive twist on a classic game. Featuring smooth animations and an engaging user interface, our game provides hours of entertainment for players of all ages. With its simple functionality and eye-catching design, our Tic Tac Toe game is the perfect addition to any gaming collection.</p>
          
            {/* <div className="button"><a href="#"><button><span className="index"> View Project<i className="gg-arrow-right" /></span></button></a></div> */}
            </div>
        </div>
        <div className="portfolio portfolio-sixth">
            <div className=" portfolio-image">
            
            <img src="images/Screenshot 2023-04-02 014743.png" alt="portfolio-sixth" />
            </div>
            <div className="portfolio-text">
            <h2>Tic Tac Toe </h2>
            <p>Our Tic Tac Toe game, built with ReactJS and Framer Motion, offers a fun and interactive twist on a classic game. Featuring smooth animations and an engaging user interface, our game provides hours of entertainment for players of all ages. With its simple functionality and eye-catching design, our Tic Tac Toe game is the perfect addition to any gaming collection.</p>
          
            {/* <div className="button"><a href="#"><button><span className="index"> View Project<i className="gg-arrow-right" /></span></button></a></div> */}
            </div>
        </div>
        </div>

    </>
  )
}

export const Project = () => {
    const isPresent = useIsPresent();
    
  return (
    <>
   
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1 }}
    >
       {/* <Navbar/> */}
      <PageCursor/>
      
    
      <div id="about-content">
        <div className="about-header">
              My <span className="color">Projects</span>
              <span className="header-caption">Some of my <span className="color"> Works</span></span>
          </div>

          <MySkills/>

        
      </div>
        
    </motion.div>

    <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1.1, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 1.1, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      >
      
      </motion.div>
    </>
  )
}
