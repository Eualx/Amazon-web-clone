import React from "react";
import classes from "./Footer.module.css";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
// import { FaBullseye } from "react-icons/fa";


function Footer() {
 
  return (
    <div>
      <div className={classes.footer_upper}>
        <hr />
        <p>see personalized recommendation</p>
        
        <button className={classes.button}> <Link to="/auth">Sign in</Link></button>
 
        <h5>New customer? <span><Link to="/auth">Start here.</Link>
        </span></h5>
        <hr />

      </div>
      <div className={classes.black}>Back to top</div>
      <div className={classes.Footer_Container}>
        <div className={classes.Footer_containerlist}>
          <div >
            <h4>Get to Know Us</h4>
            <ul>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">About Amazon</a>
              </li>
              <li>
                <a href="">Investor Relations</a>
              </li>
              <li>
                <a href="">Amazon Devices</a>
              </li>
              <li>
                <a href="">Amazon Science</a>
              </li>
            </ul>
          </div>
          <div >
            <h4>Make Money with Us</h4>
            <ul>
              <li>
                <a href="">Sell Product on Amazon</a>
              </li>
              <li>
                <a href="">Sell on Amazon business</a>
              </li>
              <li>
                <a href="">Sell apps on Amazon</a>
              </li>
              <li>
                <a href="">Become an Affiliate</a>
              </li>
              <li>
                <a href="">Advertise Your Products</a>
              </li>
              <a href=""></a>
              <li>
                <a href="">Self-Publish with Us</a>
              </li>
              <li>
                <a href="">Host an Amazon Hub</a>
              </li>
              <li><MdKeyboardArrowRight size={15} /> <span><a href="">See More make Money with us</a></span></li>
            </ul>
          </div>
          <div >
            <h4>Amazon Payment Products</h4>
            <ul>
              <li>
                <a href="">Amazon Business Card</a>
              </li>
              <li>
                <a href="">Shop with points</a>
              </li>
              <li>
                <a href="">Reload Your Balance</a>
              </li>
              <li>
                <a href="">Amazon Currency Convert</a>
              </li>
            </ul>
          </div>
          <div >
            <h3>Let Us Help You</h3>
            <ul>
              <li>
                <a href="">Amazon and COVID 19</a>
              </li>
              <li>
                <a href="">Your Account</a>{" "}
              </li>
              <li>
                <a href="">Your Orders</a>
              </li>
              <li>
                <a href="">Shipping Rates & Policies</a>
              </li>
              <li>
                <a href="">Returns & Replacements</a>
              </li>
              <li>
                <a href="">Manage Your Content and Devices</a>
              </li>
              <li>
                <a href="">Amazon Assistan</a>t
              </li>
              <li>
                <a href="">Help</a>
              </li>
            </ul>
          </div>
        
        </div>
        <br /><br /><br /><br />
        <hr />
        <div className={classes.lower_footer}>
          <div className={classes.logo} >
            <a href=""><img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /></a>
          </div>
          <div className={classes.last_footer}>
            <div>
              
         
          <div className={classes.language_menu} >
          <TbWorld /> <span>English</span>
          </div>
          {/* <div >
          <ul>
          <li><FaBullseye /> <span>English</span></li>
          <li><FaBullseye /><span>español - ES - Traducción</span></li>
          <li><FaBullseye /><span>العربية - AR - الترجمة</span></li>
          <li><FaBullseye /><span>Deutsch - DE - Übersetzung</span></li>
          <li><FaBullseye /><span>עברית - HE - תרגום</span></li>
          <li><FaBullseye /><span>한국어 - KO - 번역</span></li>
          <li><FaBullseye /><span>português - PT - Tradução</span></li>
          <li><FaBullseye /><span>中文 (简体) - ZH - 翻译</span></li>
          <li><FaBullseye /><span>中文 (繁體) - ZH - 翻譯</span></li>
          </ul>
          </div> */}
          </div>
          
          <div  >
            <a href="">$ USD - U.S.Dollar</a>
          </div>
          <div className={classes.flag} >
            <div >
            <a href=""><img
                src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                width={25}
                alt=""
              /><span>United States</span></a>  
            </div>
            
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
