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
      <div className="parent">
            <div ><DiJavascript1 className='skill_icons hover-target'/></div>
            <div ><DiReact className='skill_icons hover-target'/></div>
            <div ><DiNodejs className='skill_icons hover-target'/></div>
            <div ><TbBrandNextjs className='skill_icons hover-target'/></div>
            <div ><SiMongodb className='skill_icons hover-target'/></div>
            <div ><DiGithubBadge className='skill_icons hover-target'/></div>
            <div ><SiMaterialui className='skill_icons hover-target'/></div>
            <div ><SiFirebase className='skill_icons hover-target'/></div>
            <div ><TbBrandCss3 className='skill_icons hover-target'/></div>
        </div>
    </>
  )
}

export const About = () => {
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
              About <span className="color">Me</span>
              <span className="header-caption">Get to Know <span className="color"> me.</span></span>
          </div>
          <div className="about-main">
            <div className="about-first-paragraph wow">
              {/*about description*/}
              <span className="about-first-line">
                I'm creative <span></span>
                <span className="color">web developer</span> <span></span>
                based in New York , USA </span>
              <br />
              <span className="about-second-line"> With 20 years of experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step while working.</span>
              <div className="cv hover-target">
                <a href="#"><button>Download <span className="colors">CV</span></button></a>
              </div>
            </div>
            {/*about picture*/}
            <div className="about-img">
              <img src="images/about.jpg" alt="Your Image" />
            </div>
          </div>

      </div>
      <div id="about-content">
        <div className="about-header">
              My <span className="color">Skills</span>
              {/* <span className="header-caption">Get to Know <span className="color"> me.</span></span> */}
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
