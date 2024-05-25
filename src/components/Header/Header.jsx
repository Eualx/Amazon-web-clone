import React, { useContext,useState } from "react";
import classes from "../Header/Header.module.css";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/Firbase";
import LowerHeader from "./LowerHeader";
// import { FaBullseye } from "react-icons/fa";
function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const [showAll, setshowAll]=useState(false)
  console.log(showAll);
  // console.log(basket)
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
              />
            </Link>
          </div>
          <div className={classes.delivery}>
            <span>
              <FmdGoodOutlinedIcon />
            </span>
            <div>
              <h>Delivered to</h> <br />
              <span>Ethiopia</span>
            </div>
          </div>

          <div className={classes.search}>
            <select onClick={()=>setshowAll(!showAll)} name="" id="">
            <option value="">All </option>   
            {  showAll && (
              <>  
               
  <option value="All Department">All Department </option>
  <option value="Art & Crafts ">Automotive </option>
  <option value="Automotive ">Art & Crafts </option>
  <option value="Baby">Baby </option>
  <option value="Beauty & Personal Care">Beauty & Personal Care </option>
  <option value="Books">Books </option>
  <option value="Boys' Fashion">Boys' Fashion </option>
  <option value="Computers">Computers </option>
  <option value="Deals">Deals </option>
  <option value="Digital Music">Digital Music </option>
  <option value="Electronics">Electronics </option>
  <option value="Girls' Fashion">Girls' Fashion </option>
  <option value="Health & Househol">Health & Household </option>
  <option value="Home and Kitchen ">Home and Kitchen </option>
  <option value="Industrial & Scientific">Industrial & Scientific </option>
  <option value="Kindle Store">Kindle Store </option>
  <option value="Luggage">Luggage </option>
  <option value="Men's' Fashion">Men's' Fashion </option>
  <option value="Movies & TV">Movies & TV </option>
  <option value="Music, CDs & Vinyl">Music, CDs & Vinyl </option>
  <option value="Pet supplies">Pet supplies </option>
  <option value="Prime Video ">Prime Video </option> 
  </>
)
}
</select>
            <input type="text" placeholder="Search Amazon" />
            <BsSearch size={38} />
          </div>

          <div className={classes.order_container}>
            <div>
            <Link to="" className={classes.language}>
              <img
                src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                width={25}
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
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

            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={()=>auth.signOut()}>
                      Sign out</span>
                  </>
                ) : (
                  <>
                    <p>Hello,Sign In</p>
                    <span >Account & Lists</span>
                  </>
                )}
              </div>
            </Link>

            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>

            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
       <LowerHeader />
      </section>
    </section>
  );
}

export default Header;
