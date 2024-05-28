import React, { useContext, useState, useRef, useEffect } from "react";
import classes from "../Header/Header.module.css";
import { BsSearch } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa6";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/Firbase";
import LowerHeader from "./LowerHeader";
import { IoRadioButtonOffSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";


function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const [t, i18n] = useTranslation("")
 
  const handlechangeLanguage = (lang) => {
    i18n.changeLanguage(lang)}
 
  const [showdetail, setShowdetail] = useState(false);
  const [showSinin, setShowSinin] = useState(false);
  const [showAll, setshowAll] = useState(false);
  const [manageprofile, setmangeProfile] = useState(false);
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("mouseover", (e) => {
      if (e.target.contains(ref.current)) {
        // setShowdetail(false)
        setShowSinin(false);
      }
    });
  }, []);

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
              <FmdGoodOutlinedIcon size={15} />
            </span>
            <div>
              <h1>{t('words.deliver')}</h1>
              <span>{t('words.ethiopia')}</span>
            </div>
          </div>

          <div className={classes.search}>
            <select onClick={() => setshowAll(!showAll)} name="" id="">
              <option value="" hidden>
              {t('words.all')}  
              </option>
              {showAll && (
                <>
                  <option value="All Department">All Department </option>
                  <option value="Art & Crafts ">Automotive </option>
                  <option value="Automotive ">Art & Crafts </option>
                  <option value="Baby">Baby </option>
                  <option value="Beauty & Personal Care">
                    Beauty & Personal Care{" "}
                  </option>
                  <option value="Books">Books </option>
                  <option value="Boys' Fashion">Boys' Fashion </option>
                  <option value="Computers">Computers </option>
                  <option value="Deals">Deals </option>
                  <option value="Digital Music">Digital Music </option>
                  <option value="Electronics">Electronics </option>
                  <option value="Girls' Fashion">Girls' Fashion </option>
                  <option value="Health & Househol">Health & Household </option>
                  <option value="Home and Kitchen ">Home and Kitchen </option>
                  <option value="Industrial & Scientific">
                    Industrial & Scientific{" "}
                  </option>
                  <option value="Kindle Store">Kindle Store </option>
                  <option value="Luggage">Luggage </option>
                  <option value="Men's' Fashion">Men's' Fashion </option>
                  <option value="Movies & TV">Movies & TV </option>
                  <option value="Music, CDs & Vinyl">
                    Music, CDs & Vinyl{" "}
                  </option>
                  <option value="Pet supplies">Pet supplies </option>
                  <option value="Prime Video ">Prime Video </option>
                </>
              )}
            </select>
            <input type="text" placeholder={t('words.searchamazon')} />
            <BsSearch size={38} />
          </div>

          <div className={classes.order_container}>
            <div className={classes.language_container}>
              <Link
                onMouseOver={() => setShowdetail(true)}
                to=""
                className={classes.language}
              >
                <img
                  src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                  width={15}
                  alt=""
                />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </Link>
              {showdetail && (
                <div  className={classes.container}>
                  <div ref={ref}
                  onMouseLeave={() => setShowdetail(false)}
                  >
                <div className={classes.language_detail_container}
                >
                  <div className={classes.language_link}>
                    <div>Change language </div>
                    <span>
                      <a href="">Learn more</a>
                    </span>
                  </div>
                  <div className={classes.language_list}>
                    <ul>
                      <li>
                        <IoRadioButtonOffSharp />{" "}
                        <span>
                          <a onClick={()=>handlechangeLanguage("en")} href="">English-EN</a>
                        </span>
                      </li>
                      <br />
                      <hr />
                      <br />
                      <li>
                        <IoRadioButtonOffSharp />
                        <span>
                          <a onClick={()=>handlechangeLanguage("es")}href="">español - ES</a> <a href=""></a>
                        </span>
                      </li>
                      <li>
                        <IoRadioButtonOffSharp />
                        <span>
                          {" "}
                          <a onClick={()=>handlechangeLanguage("ar")} href="">لعربيةا- AR</a>{" "}
                        </span>
                      </li>
                      <li>
                        <IoRadioButtonOffSharp />
                        <span>
                          <a href="">Deuch - DE</a>{" "}
                        </span>
                      </li>
                      <li>
                        <IoRadioButtonOffSharp />
                        <span>
                          <a href="">עברית - HE</a>{" "}
                        </span>
                      </li>
                      <li>
                        <IoRadioButtonOffSharp />
                        <span>
                          <a href="">한국어 - KO</a>{" "}
                        </span>
                      </li>
                      <li>
                        <IoRadioButtonOffSharp />
                        <span>
                          <a href="">português - PT</a>{" "}
                        </span>
                      </li>
                      <li>
                        <IoRadioButtonOffSharp />
                        <span>
                          <a href="">中文 (简体) - ZH </a>
                        </span>
                      </li>
                      <li>
                        <IoRadioButtonOffSharp />
                        <span>
                          <a href="">中文 (繁體) - ZH</a>{" "}
                        </span>
                      </li>
                      <br />
                    </ul>
                  </div>
                  <div className={classes.language_link}>
                    <p>Change Currency </p>
                    <span>
                      <a href="">Learn more</a>
                    </span>
                  </div>
                  <div className={classes.language_change}>
                    <p>$ USD - U.S.Dollar</p>
                    <span>
                      {" "}
                      <a href="">change</a>
                    </span>
                  </div>
                  <div>
                    <div className={classes.amzonshopping}>
                      <img
                        src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                        width={15}
                        alt=""
                      />{" "}
                      <span> Your are shopping on Amazon.com</span>
                      <br />
                      <br />
                      <a href="">Change country/region</a>
                    </div>
                  </div>
                </div>
                </div>
                {showdetail && (
                  <div className={classes.background}>

                  </div>
                )}
                </div>
              )}
            </div>

            <Link to={!user && "/auth"}>
              {user ? (
                <>
                  <p>{t('words.hello')} {user?.email?.split("@")[0]}</p>
                  <span
                    onClick={() => auth.signOut()}
                    onMouseOver={() => setShowSinin(true)}
                  >
                    {t('words.signout')}
                  </span>
                  {showSinin && (
                    <div className={classes.container}>
                      
                    
                    <div
                      onMouseLeave={() => setShowSinin(false)}
                      className={classes.signinbackground}
                    >
                      <div className={classes.signin_detail}>
                        <div className={classes.singout_upper}>
                          <div>
                            <p>Who is shooping? select a profile.</p>
                          </div>
                          <div>
                            <h5 onClick={() => setmangeProfile(true)}>
                              {" "}
                              Manage profile{" "}
                              <span>
                                <MdOutlineKeyboardArrowRight />
                              </span>
                            </h5>
                          </div>
                        </div>
                        <div className={classes.signin_bottom}>
                          <div className={classes.left}>
                            <h5> Your List</h5>
                            <ul>
                              <li>Creat a List</li>
                              <li>Find a List or Registry</li>
                              <li>Your Saved Books</li>
                            </ul>
                          </div>

                          <div className={classes.right}>
                            <h5> Your Account </h5>
                            <ul>
                              <li>Account</li>
                              <li>Orders</li>
                              <li>Recommendation</li>
                              <li>Browsing History</li>
                              <li>Watchlist</li>
                              <li>Video purchase & Rentals</li>
                              <li>Kindle Unlimited</li>
                              <li>Content & Devices</li>
                              <li>Subscribe & Save Items</li>
                              <li>Membership & Subscription</li>
                              <li>Music Library</li>
                              <li>Switch Account</li>
                              <li className={classes.signOut}>
                                <Link onClick={() => auth.signOut()} to="">Sign Out</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {showSinin &&(
                      <div  className={classes.background}>

                      </div>
                    )}


                    </div>
                  )}

                  {manageprofile && (

                    <div className={classes.container}>
                     
                    <div className={classes.profile_identifier_container}>
                      <div className={classes.id_top}>
                        <h3>Who is shopping</h3>
                        <IoMdClose
                          onClick={() => setmangeProfile(false)}
                          size={25}
                        />
                      </div>
                      <div className={classes.profile}>
                        <div className={classes.profile_detail}>
                          <div>
                            <MdAccountCircle color="blue" size={35} />
                          </div>
                          <div>
                            {user?.email?.split("@")[0]}
                            <br />
                            Account holder
                          </div>
                        </div>
                        <div>
                          <a href="">View</a>
                        </div>
                      </div>
                      <div className={classes.addProfile}>
                        <div>
                          <IoAddCircleSharp color="gray" size={35} />
                        </div>
                        <div>
                          <a href="">Add profile</a>
                        </div>
                      </div>
      
                     </div>

                     {
                  manageprofile &&( <div onClick={() => setmangeProfile(false)} className={classes.background}>
                    
                  </div>)
                 }

                     </div>

                
                  )}
                 
                </>
              ) : (
                <>
                  <p>{t('words.Signin')} ,</p>
                  <span onMouseOver={() => setShowSinin(true)}>
                 {t('words.Account_list')}
                  </span>
                  {showSinin && (
                    <div className={classes.container}>
                      
                    
                    <div
                      onMouseLeave={() => setShowSinin(false)}
                      className={classes.signin_detail}
                    >
                      <div className={classes.singin_upper}>
                        <button>
                          <Link to="/auth">Sign in</Link>
                        </button>
                        <p>
                          New customer?
                          <span>
                            <Link to="/auth"> start here</Link>
                          </span>
                        </p>
                      </div>

                      <div className={classes.signin_bottom}>
                        <div className={classes.left}>
                          <h5> Your List</h5>
                          <ul>
                            <li>Creat a List</li>
                            <li>Find a List or Registry</li>
                          </ul>
                        </div>

                        <div className={classes.right}>
                          <h5> Your Account </h5>
                          <ul>
                            <li>Account</li>
                            <li>Orders</li>
                            <li>Recommendation</li>
                            <li>Browsing History</li>
                            <li>Watchlist</li>
                            <li>Video purchase & Rentals</li>
                            <li>Kindle Unlimited</li>
                            <li>Content & Devices</li>
                            <li>Subscribe & Save Items</li>
                            <li>Membership & Subscription</li>
                            <li>Music Library</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {showSinin && (
                      <div  className={classes.background}>
                        
                      </div>
                    )}
                    </div>
                  )}
                </>
              )}
            </Link>

            <Link to="/orders">
              <p>{t('words.return')}</p>
              <span>{t('words.orders')}</span>
            </Link>

            <Link to="/cart" className={classes.cart}>
              <FaCartArrowDown size={35} />

              <span>{totalItem}</span>
              {t('words.cart')}
              {/* Cart */}
            </Link>
          </div>
        </div>
        <LowerHeader />

      </section>
    </section>
  );
}

export default Header;
