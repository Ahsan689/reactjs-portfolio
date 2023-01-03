import React, {useEffect, useState} from 'react'
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {

    const location = useLocation()
    const [navBar, setnavBar] = useState(false)
   

    const menuIcon =()=> setnavBar(!navBar)

    
        //Navigation

        var app = function () {
        var navBar_div = undefined;
        var menu = undefined;
        var menuItems = [];

        var init = function init() {
            navBar_div = document.querySelector('.navBar_div');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');
            console.log(menuItems,"menuItems");
            applyListeners();
            // hideNavbar();
        };
        
        var applyListeners = function applyListeners() {
            if(menu){
                menu.addEventListener('click', function () {
                    return toggleClass(navBar_div, 'nav-active');
                });
            //     if(menuItems){
            //         for (let i = 0; i < menuItems.length; i++) {
            //             menuItems[i].addEventListener("click", function(item) {
            //                 console.log(item,"iittee");
            //                 return toggleClass(navBar_div, 'nav-active');
            //             });
            //           }
                
            // };
            }
        };
    
        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
        };

        init();

    

        } 
        
    useEffect(() => {
        // app()
        // pageNavigation() 
        
    //     return () => {
    //     // pageNavigation() 
    //     app()
    //   }
    }, [])
     //Switch light/dark
        // if(document.querySelector("#switch")){

        //     document.querySelector("#switch").addEventListener('click', function () {
        //       if (document.body.classList.contains("light")) {
        //         document.body.classList.remove("light");
        //         document.querySelector("#switch").classList.remove("switched");
        //       }
        //       else {
        //         document.body.classList.add("light");
        //         document.querySelector("#switch").classList.add("switched");
        //       }
        //     });
        // }
  return (
    <>
    <div className={`navBar_div ${navBar?'nav-active':'' }`}>

     <header className="cd-header">
        <div className="header-wrapper">
        <div className="logo-wrap">
            <Link to={'/about'} className="hover-target"><span>your</span>logo</Link>
        </div>
        <div className="nav-but-wrap">
            <div className="menu-icon hover-target" onClick={()=>menuIcon()}>
            <span className="menu-icon__line menu-icon__line-left" />
            <span className="menu-icon__line" />
            <span className="menu-icon__line menu-icon__line-right" />
            </div>					
        </div>					
        </div>				
        </header>
        <div className="nav">
            <div className="nav__content">
            <ul className="nav__list">
                <li  className={`nav__list-item ${location.pathname=='/'? 'active-nav':''}`}><Link to={'/'}   className="hover-target">home</Link></li>
                <li  className={`nav__list-item ${location.pathname=='/about'? 'active-nav':''}`}><Link to={'/about'}   className="hover-target">about</Link></li>

                <li  className={`nav__list-item`}><Link  to={'/'}  className="hover-target">studio</Link></li>
                <li  className={`nav__list-item`}><Link  to={'/'}  className="hover-target">contact</Link></li>
            </ul>
            </div>
        </div>		
    </div>
   
    </>
  )
}

export default Navbar