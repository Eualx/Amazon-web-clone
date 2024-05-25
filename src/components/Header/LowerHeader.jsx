import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import {animate, motion} from "framer-motion"

import classes from './Header.module.css'
function LowerHeader() {
  const ref =useRef()
  const [sidebar, setSidebar]=useState(false)
  useEffect(()=>{
document.body.addEventListener("click",(e)=>{
  if(e.target.contains(ref.current)){
    setSidebar(false)
    document.body.classList.toggle('no-scroll');
  }

})

}, [])


  // const toggleSidebar = () => {
  //   setSidebar(!sidebar);
  //   document.body.classList.toggle('no-scroll');
  // };

  return (
    <section className={classes.window}>
      
    
    <div className={classes.lower_container}>
<ul>
    <li onClick={()=>setSidebar(true)}>
  
    <CiMenuBurger  />
        <p>All</p>
    </li>
    <li>Today's Deals</li>
    <li>Customer Service</li>
    <li>Registry</li>
    <li>Gift Cards</li>
    <li>Sell</li>
</ul>
</div>
{
  sidebar && (
    <motion.div ref={ref}  initial={{x:-500, opacity:0}}  animate={{x:0,opacity:1}} transition={{duration:0.5}} className={classes.slide}>
      <div className={classes.menu_Container}>
        <div >
          <div className={classes.signin}>
         < MdAccountCircle size={35}/>
         <Link to="/auth">Hello, Sign In</Link>
          
          </div>
        <div className={classes.content}>
          <h3>Digital Conten & Devices</h3>
          <ul>
            <li><span>Amazon Music</span><MdKeyboardArrowRight size={25} /></li>
            <li><span>Kindle E-reader & Books</span><MdKeyboardArrowRight size={25} /></li>
            <li><span>Amazon Appstore</span><MdKeyboardArrowRight size={25} /></li>
          </ul>
        </div>
        <div className={classes.content}>
          <h3>Shop by Department</h3>
          <ul>
            <li><span>Electronics </span><MdKeyboardArrowRight size={25} /></li>
            <li><span>Computer</span><MdKeyboardArrowRight size={25} /></li>
            <li><span>Smart Home</span><MdKeyboardArrowRight size={25} /></li>
            <li><span>Art & Crafts</span><MdKeyboardArrowRight size={25} /></li>
            <li className={classes.icons}><span>See all</span><MdOutlineKeyboardArrowDown /></li>
          </ul>
        </div>
        <div className={classes.content}>
          <h3>Programs & Features</h3>
          <ul>
            <li><span>Gift Cards</span> <MdKeyboardArrowRight size={25} /></li>
            <li><span>Shop By Interest</span><MdKeyboardArrowRight size={25} /></li>
            <li><span>Amazon Appstore</span><MdKeyboardArrowRight size={25} /></li>
            <li><span>International Shopping</span><MdKeyboardArrowRight size={25} /></li>
            <li className={classes.icons}><span>See all</span><MdOutlineKeyboardArrowDown /></li>
          </ul>
        </div>
        <div className={classes.content}>
          <ul>
          <h3>Help & Setting</h3>
            <li>
            your Account

            </li>
            <li className={classes.icons}>
            <TbWorld /> <span>English</span></li>
          <li >
            <a href=""><img
                src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                width={25}
                alt=""
              /> <span>United States</span></a>
          </li>
          <li>Customer Service</li>
          
         <li>Sign in</li>
          </ul>
         
          
        </div> 
    
      </div>
    </div>
    <div className={classes.closing}>
<IoMdClose size={35} onClick={()=>setSidebar(false)}/>
    </div>
       </motion.div>

  )
}

    
    </section>
  )
}

export default LowerHeader

