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
            <img src="images/portfolio-first.jpg" alt="portfolio-first" />
            </div>
            <div className="portfolio-text">
            <h2>App Idea</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ut optio repellat cupiditate 
                expedita eius dignissimos. Id cumque placeat minima ad laudantium suscipit voluptatem ducimus</p>
            <div className="button"><a href="#"><button><span className="index"> View Project<i className="gg-arrow-right" /></span></button></a></div>
            </div>
        </div>
        <div className="portfolio portfolio-second">
            <div className="portfolio-image">
            <img src="images/portfolio-second.jpg" alt="portfolio-second" />
            </div>
            <div className="portfolio-text">
            <h2>Web Designing</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id cumque placeat minima ad laudantium suscipit
                voluptatem ducimus. Id cumque placeat minima ad laudantium suscipit voluptatem ducimus</p>
            <div className="button"><a href="#"><button><span className="index"> View Project<i className="gg-arrow-right" /></span></button></a></div>
            </div>
        </div>
        <div className="portfolio portfolio-third">
            <div className="portfolio-image">
            <img src="images/portfolio-third.jpg" alt="portfolio-third" />
            </div>
            <div className="portfolio-text">
            <h2>UI Designing</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ut optio repellat cupiditate expedita eius dignissimos
                .. Id cumque placeat minima ad laudantium suscipit voluptatem ducimus</p>
            <div className="button"><a href="#"><button><span className="index"> View Project<i className="gg-arrow-right" /></span></button></a></div>
            </div>
        </div>
        <div className="portfolio portfolio-fourth">
            <div className=" portfolio-image">
            <img src="images/portfolio-fourth.jpg" alt="portfolio-fourth" />
            </div>
            <div className="portfolio-text">
            <h2>Wow Graphics</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ut optio repellat cupiditate
                expedita eius dignissimos. Id cumque placeat minima ad laudantium suscipit voluptatem ducimus</p>
            <div className="button"><a href="#"><button><span className="index"> View Project<i className="gg-arrow-right" /></span></button></a></div>
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
              My <span className="color">Skills</span>
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
