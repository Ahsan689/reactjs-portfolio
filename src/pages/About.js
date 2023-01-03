import React,{useEffect, useState} from 'react'
import { motion, useIsPresent } from "framer-motion";
import { Link } from "react-router-dom"
import Navbar from '../component/Navbar';
import PageCursor from '../component/PageCursor';

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
      
   
        <div style={{display:'flex',justifyContent:'center'}}>
            <h1 style={{color:'white',padding:"40px"}}>OUR NEW HOME</h1>
            <ul style={{marginTop:"50px"}}>
            <li>
                <Link to="/" style={{color:'white'}}>Home</Link>
                </li>
                <li>
                {/* <Link to="/contact">contact</Link> */}
                </li>
            </ul>

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
