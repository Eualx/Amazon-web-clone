import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { motion} from "framer-motion"
import classes from './Header.module.css'
function LowerHeader({t, i18n}) {
  const ref =useRef()
  const [sidebar, setSidebar]=useState(false)
  useEffect(()=>{
document.body.addEventListener("click",(e)=>{
  if(e.target.contains(ref.current)){
    setSidebar(false)
    
  }

})

}, [])
const openSlider=()=>{
  setSidebar(true)
  document.body.classList.add(`${classes.noscroll}`)
}
const closeSlider=()=>{
  setSidebar(false)
  document.body.classList.remove(`${classes.noscroll}`)
}

  return (
    <section className={classes.window}>
      
    
    <div className={classes.lower_container}>
<ul>
    <li onClick={openSlider}>
  
    <CiMenuBurger  />
        <p>{t('words.all')} </p>
        {/* <p>All</p> */}
    </li>
    <li>{t('words.todaydeals')}</li>
    <li>{t('words.customerservice')}</li>
    <li>{t('words.registry')}</li>
    <li>{t('words.giftcards')}</li>
    <li>{t('words.sell')}</li>
</ul>
</div>
{
  sidebar && (
    <div className={classes.slidercontainer}>
      
    
    <motion.div ref={ref}  initial={{x:-500, opacity:0}}  animate={{x:0,opacity:1}} transition={{duration:0.25}} className={classes.slide}>
      <div className={classes.menu_Container}>
        <div >
          <div className={classes.signin}>
         < MdAccountCircle size={35}/>
         <Link to="/auth">{t('words.hello')}, {t('words.Signin')}</Link>
          
          </div>
        <div className={classes.content}>
          <h3>{t('words.digitalconten_device')}</h3>
          <ul>
            <li><span>{t('words.Amazon_Music')}</span><MdKeyboardArrowRight size={25} /></li>
            <li><span>{t('words.Kindle_E_reader_Books')}</span><MdKeyboardArrowRight size={25} /></li>
            <li><span>{t('words.Amazon_Appstore')}</span><MdKeyboardArrowRight size={25} /></li>
          </ul>
        </div>
        <div className={classes.content}>
          <h3>{t('words.Shop_by_Department')}</h3>
          <ul>
            <li><span>{t('words.Electronics')} </span><MdKeyboardArrowRight size={25} /></li>
            <li><span>{t('words.Computer')}</span><MdKeyboardArrowRight size={25} /></li>
            <li><span>{t('words.Smart_Home')}</span><MdKeyboardArrowRight size={25} /></li>
            <li><span>{t('words.Art_Crafts')}</span><MdKeyboardArrowRight size={25} /></li>
            <li className={classes.icons}><span>{t('words.See_all')}</span><MdOutlineKeyboardArrowDown /></li>
          </ul>
        </div>
        <div className={classes.content}>
          <h3>{t('words.Art_Crafts')}</h3>
          <ul>
            <li><span>{t('words.giftcards')}</span> <MdKeyboardArrowRight size={25} /></li>
            <li><span>{t('words.Shop_By_Interest')}</span><MdKeyboardArrowRight size={25} /></li>
            <li><span>{t('words.Amazon_Appstore')}</span><MdKeyboardArrowRight size={25} /></li>
            <li><span>{t('words.International_Shopping')}</span><MdKeyboardArrowRight size={25} /></li>
            <li className={classes.icons}><span>{t('words.See_all')}</span><MdOutlineKeyboardArrowDown /></li>
          </ul>
        </div>
        <div className={classes.content}>
          <ul>
          <h3>{t('words.Help_Setting')}</h3>
            <li>
            {t('words.your_Account')}

            </li>
            <li className={classes.icons}>
            <TbWorld /> <span>{t('words.English')}</span></li>
          <li >
            <a href=""><img
                src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                width={25}
                alt=""
              /> <span>{t('words.United_State')}</span></a>
          </li>
          <li>{t('words.Customer_Service')}</li>
          
         <li>{t('words.Signin')}</li>
          </ul>
         
          
        </div> 
    
      </div>
    </div>
    {
      sidebar && (<div onClick={closeSlider} className={classes.backdrop}>
        
      </div>)
    }
    <div className={classes.closing}>
<IoMdClose size={35} onClick={()=>setSidebar(false)}/>
    </div>
       </motion.div>
       </div>
  )
}

    
    </section>
  )
}

export default LowerHeader

