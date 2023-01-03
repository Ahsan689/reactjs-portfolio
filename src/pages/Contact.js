import React from 'react'
import { motion, useIsPresent } from "framer-motion";
import { Link } from "react-router-dom"
export const Contact = () => {

    const isPresent = useIsPresent();

  return (<>
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
    <h1  style={{justifyContent:'center',display:'flex'}}>Contact</h1>
    <ul>
    <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>

    </motion.div>
    <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.6, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.6, ease: "circIn" } }}
        style={{ originX: isPresent ? 1 : 0 }}
        className="privacy-screen"
      />
  </>
  )
}
