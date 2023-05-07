import React,{useEffect} from 'react'
import anime from 'animejs';

const TextAnimation = () => {


    useEffect(() => {
      
        // Text - Animationnn
        // Wrap every letter in a span
        var textWrapper = document.querySelector('.ml12');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
        anime.timeline({loop: false})
        .add({
            targets: '.ml12 .letter',
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 500 + 50 * i
        })
        // .add({
        //     targets: '.ml12 .letter',
        //     translateX: [0,-30],
        //     opacity: [1,0],
        //     easing: "easeInExpo",
        //     duration: 1500,
        //     delay: (el, i) => 300 + 60 * i
        // });
        // Text - Animationnn

    }, [])
    

  return (
    <>
    <h2 style={{fontFamily:'Aboreto',position:'relative',fontSize:42}} className="">Fullstack <span className="color ml12" style={{color:'crimson',fontSize:42}}> MERN developer</span>  </h2> &nbsp;&nbsp;
     <h3 className='main_headline' style={{fontFamily:'Aboreto',color:'whitesmoke', fontSize:28,textTransform:'capitalize'}}> Crafting Robust and Scalable Web Applications </h3>
     <h3 className='main_headline' style={{fontFamily:'Aboreto',color:'whitesmoke', fontSize:28,textTransform:'capitalize'}}>   with Modern Technologies</h3>
    </>
  )
}

export default TextAnimation