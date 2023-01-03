import React, {useEffect, useRef, useCallback } from 'react'
import { motion, useIsPresent } from "framer-motion";
import anime from 'animejs';
import gsap from 'gsap';

const PageCursor = () => {
    // const isPresent = useIsPresent();
    // const cursor = useRef()
    // const cursor2 = useRef()
    // const cursor3 = useRef()
    

    // var pageCursor = function(){
        
    //     //Page cursors
    //      document.addEventListener("mousemove", function(n) {
    //         // console.log( n);
    //         if(cursor.current&&cursor2.current&&cursor3.current){
    //             return(
    //                 cursor.current.style.left = n.clientX + "px", 
    //                 cursor.current.style.top = n.clientY + "px", 
    //                 cursor2.current.style.left = n.clientX + "px", 
    //                 cursor2.current.style.top = n.clientY + "px",
    //                 cursor3.current.style.left = n.clientX + "px", 
    //                 cursor3.current.style.top = n.clientY + "px"
    //             )

    //         }
    //    });
    // //    var t = document.getElementById("cursor"),
    //         // console.log(cursor.current,"cyrrent");
    //    var t = cursor.current,
    //        e = cursor2.current,
    //        i = cursor3.current;
    //    function n(t) {
    //        return cursor2.current.classList.add("hover"), cursor3.current.classList.add("hover")
    //    }
    //    function s(t) {
    //        if(cursor2) return cursor2.current.classList.remove("hover"), cursor3.current.classList.remove("hover")
    //    }
    //    s();
    //    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
    //        o(r[a])
    //    }
    //    function o(cursor) {
    //     if(cursor.current) return cursor.current.addEventListener("mouseover", n), cursor.current.addEventListener("mouseout", s)
    //    }
    // }

    function pageCursor(){

        // special thanks to Blake Bowen for most of the code.
        gsap.set(".cursor", {xPercent: -50, yPercent: -50});
        gsap.set(".cursor2", {xPercent: -50, yPercent: -50});
        gsap.set(".cursor3", {xPercent: -50, yPercent: -50});

        
    
        const cursor = document.querySelector(".cursor");
        const cursor2 = document.querySelector(".cursor2");
        const cursor3 = document.querySelector(".cursor3");
        const pos = { x: window.innerWidth / 10, y: window.innerHeight / 10 };
        const mouse = { x: pos.x, y: pos.y };
        const speed = 0.6;
        const pos2 = { x: window.innerWidth / 100, y: window.innerHeight / 100 };
        const mouse2 = { x: pos2.x, y: pos2.y };
        const speed2 = 0.6;
        const pos3 = { x: window.innerWidth / 100, y: window.innerHeight / 100 };
        const mouse3 = { x: pos2.x, y: pos2.y };
        const speed3 = 0.6;

        
       
    
        const xSet = gsap.quickSetter(cursor, "x", "px");
        const ySet = gsap.quickSetter(cursor, "y", "px");
        const xSet2 = gsap.quickSetter(cursor2, "x", "px");
        const ySet2 = gsap.quickSetter(cursor2, "y", "px");
        const xSet3 = gsap.quickSetter(cursor3, "x", "px");
        const ySet3 = gsap.quickSetter(cursor3, "y", "px");
    
      
        window.addEventListener("mousemove", e => {    
        mouse.x = e.x;
        mouse.y = e.y;  
        mouse2.x = e.x;
        mouse2.y = e.y;  
        mouse3.x = e.x;
        mouse3.y = e.y;  
        });
        function n(t) {
            return cursor2.classList.add("hover"), cursor3.classList.add("hover")
        }
        function s(t) {
            if(cursor2) return cursor2.classList.remove("hover"), cursor3.classList.remove("hover")
        }
        s();
        for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
            o(r[a])
        }
        function o(cursor) {
        if(cursor) return cursor.addEventListener("mouseover", n), cursor.addEventListener("mouseout", s)
        }
    
        gsap.ticker.add(() => {
        
            
        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
        const dt2 = 1.0 - Math.pow(1.0 - speed2, gsap.ticker.deltaRatio()); 
        const dt3 = 1.0 - Math.pow(1.0 - speed3, gsap.ticker.deltaRatio()); 
        
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        pos2.x += (mouse2.x - pos2.x) * dt2;
        pos2.y += (mouse2.y - pos2.y) * dt2;
        pos3.x += (mouse3.x - pos3.x) * dt3;
        pos3.y += (mouse3.y - pos3.y) * dt3;
        xSet(pos.x);
        ySet(pos.y);
        xSet2(pos2.x);
        ySet2(pos2.y);
        xSet3(pos3.x);
        ySet3(pos3.y);
        });
      
       
    }



    useEffect(() => {
        pageCursor()
    
    return () => {
        // sphereAnimation()
        // pageCursor()
    }
}, [])

  return (
    <>
    <div className="cursor" id={'cursor'} />
    <div className="cursor2" id={'cursor2'} />
    <div className="cursor3" id={'cursor3'} />
    </>
  )
}
export default PageCursor;
