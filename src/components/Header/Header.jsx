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

  const [t, i18n] = useTranslation("");

  const handlechangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

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
      <section >
        <div className={classes.header_container} >
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
              <h1>{t("words.deliver")}</h1>
              <span>{t("words.ethiopia")}</span>
            </div>
          </div>

          <div className={classes.search}>
            <select onClick={() => setshowAll(!showAll)} name="" id="">
              <option value="" hidden>
                {t("words.all")}
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
            <input type="text" placeholder={t("words.searchamazon")} />
            <BsSearch size={38} />
          </div>

          <div className={classes.order_container} >
            <div className={classes.language_container} onMouseLeave={() => setShowdetail(false)} >   
                <Link 
                 
                to=""
                className={classes.language}
              >

                <img
                  src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                  width={15}
                  alt=""
                />
                <select onMouseOver={() => setShowdetail(true)} name="" id="">
                  <option value="">{t('words.lan')}</option>
                </select>
              </Link>
             
              {showdetail && (
                <div className={classes.container}  >
                  <div>
                    <div className={classes.language_detail_container}>
                      <div className={classes.language_link}>
                        <div>{t('words.Change_language')} </div>
                        <span>
                          <Link to="">{t('words.Learn_More')}</Link>
                        </span>
                      </div>
                      <div className={classes.language_list}>
                        <ul>
                          <li>
                            <IoRadioButtonOffSharp />{" "}
                            <span>
                              <Link
                                onClick={() => handlechangeLanguage("en")}
                                to=""
                              >
                                English-EN
                              </Link>
                            </span>
                          </li>
                          <br />
                          <hr />
                          <br />
                          <li>
                            <IoRadioButtonOffSharp />
                            <span>
                              <Link
                                onClick={() => handlechangeLanguage("es")}
                                to=""
                              >
                                español - ES
                              </Link>{" "}
                              <Link to=""></Link>
                            </span>
                          </li>
                          <li>
                            <IoRadioButtonOffSharp />
                            <span>
                              {" "}
                              <Link
                                onClick={() => handlechangeLanguage("ar")}
                                to=""
                              >
                                لعربيةا- AR
                              </Link>{" "}
                            </span>
                          </li>
                          <li>
                            <IoRadioButtonOffSharp />
                            <span>
                              <Link
                                onClick={() => handlechangeLanguage("am")}
                                to=""
                              >
                                አማርኛ-አማ
                              </Link>{" "}
                            </span>
                          </li>
                          <li>
                            <IoRadioButtonOffSharp />
                            <span>
                              <Link to="">עברית - HE</Link>{" "}
                            </span>
                          </li>
                          <li>
                            <IoRadioButtonOffSharp />
                            <span>
                              <Link to="">한국어 - KO</Link>{" "}
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
                              <Link to="">中文 (简体) - ZH </Link>
                            </span>
                          </li>
                          <li>
                            <IoRadioButtonOffSharp />
                            <span>
                              <Link to="">中文 (繁體) - ZH</Link>{" "}
                            </span>
                          </li>
                          <br />
                        </ul>
                      </div>
                      <div className={classes.language_link}>
                        <p>{t('words.change_currency')} </p>
                        <span>
                          <Link to="">{t('words.Learn_More')}</Link>
                        </span>
                      </div>
                      <div className={classes.language_change}>
                        <p>$ USD - U.S.Dollar</p>
                        <span>
                          {" "}
                          <Link to="">{t('words.change')}</Link>
                        </span>
                      </div>
                      <div>
                        <div className={classes.amzonshopping}>
                          <img
                            src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                            width={15}
                            alt=""
                          />{" "}
                          <span> {t('words.Your_are_shopping_on_Amazon_com')}</span>
                          <br />
                          <br />
                          <a href="">{t('words.Change_country_region')}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              )}
            </div>


            <Link to={!user && "/auth"}>
              {user ? (
                <>

                  <p onMouseOver={() => setShowSinin(true)}>
                    {t("words.hello")} {user?.email?.split("@")[0]}
                  </p>
                  <span
                    onClick={() => auth.signOut()}
                    onMouseOver={() => setShowSinin(true)}
                   
                    
                  >
                    {t("words.signout")}
                  </span>
                
                  {showSinin && (
                    <div className={classes.container}   >
                      <div
                        
                        className={classes.signinbackground}
                      onMouseLeave={() => setShowSinin(false)} >
                        <div className={classes.signin_detail}>
                          <div className={classes.singout_upper}>
                            <div>
                              <p> {t("words.Whois_shooping_select_a_profile")}</p>
                            </div>
                            <div>
                              <h5 onClick={() => setmangeProfile(true)}>
                                {" "}
                                {t("words.Manage_profile")}{" "}
                                <span>
                                  <MdOutlineKeyboardArrowRight />
                                </span>
                              </h5>
                            </div>
                          </div>
                          <div className={classes.signin_bottom}>
                            <div className={classes.left}>
                              <h5>  {t("words.Your_List")}</h5>
                              <ul>
                                <li>{t("words.Creat_a_List")}</li>
                                <li>{t("words.Find_a_List_or_Registry")}</li>
                                <li>{t("words.Your_Saved_Books")}</li>
                              </ul>
                            </div>

                            <div className={classes.right}>
                              <h5> {t("words.Your_Account")} </h5>
                              <ul>
                                <li>{t("words.Account")}</li>
                                <li>{t("words.Orders")}</li>
                                <li>{t("words.Recommendation")}</li>
                                <li>{t("words.Browsing_History")}</li>
                                <li>{t("words.Watchlist")}</li>
                                <li>{t("words.Video_purchase_Rentals")}</li>
                                <li>{t("words.Kindle_Unlimited")}</li>
                                <li>{t("words.Content_Devices")}</li>
                                <li>{t("words.Subscribe_Save_Items")}</li>
                                <li>{t("words.Membership_Subscription")}</li>
                                <li>{t("words.Music_Library")}</li>
                                <li>{t("words.Switch_Account")}</li>
                                <li className={classes.signOut}>
                                  <Link onClick={() => auth.signOut()} to="">
                                  {t("words.signout")}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {showSinin && <div className={classes.background}></div>}
                    </div>
                  )}

                  {manageprofile && (
                    <div className={classes.container}>
                      <div className={classes.profile_identifier_container}>
                        <div className={classes.id_top}>
                          <h3>{t("words.Whois_shooping")}</h3>
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
                              {t("words.Account_holder")}
                            </div>
                          </div>
                          <div>
                            <a href="">{t("words.View")}</a>
                          </div>
                        </div>
                        <div className={classes.addProfile}>
                          <div>
                            <IoAddCircleSharp color="gray" size={35} />
                          </div>
                          <div>
                            <a href="">{t("words.Add_profile")}</a>
                          </div>
                        </div>
                      </div>

                      {manageprofile && (
                        <div
                          onClick={() => setmangeProfile(false)}
                          className={classes.background}
                        ></div>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <>
                  <p>{t("words.Signin")} ,</p>
                  <span onMouseOver={() => setShowSinin(true)}>
                    {t("words.Account_list")}
                  </span>
                  {showSinin && (
                    <div className={classes.container}>
                      <div
                        onMouseLeave={() => setShowSinin(false)}
                        className={classes.signin_detail}
                      >
                        <div className={classes.singin_upper}>
                          <button>
                            <Link to="/auth"> {t("words.Signin")}</Link>
                          </button>
                          <p>
                            {t("words.New_customer")}
                            <span>
                              <Link to="/auth" style={{ color:"#598E9E"}}> {t("words.Start_here")}</Link>
                            </span>
                          </p>
                        </div>

                        <div className={classes.signin_bottom}>
                          <div className={classes.left}>
                            <h5>{t("words.Your_List")}</h5>
                            <ul>
                            <li>{t("words.Creat_a_List")}</li>
                                <li>{t("words.Find_a_List_or_Registry")}</li>
                            </ul>
                          </div>

                          <div className={classes.right}>
                            <h5> {t("words.Your_Account")}</h5>
                            <ul>
                            <li>{t("words.Account")}</li>
                                <li>{t("words.Orders")}</li>
                                <li>{t("words.Recommendation")}</li>
                                <li>{t("words.Browsing_History")}</li>
                                <li>{t("words.Watchlist")}</li>
                                <li>{t("words.Video_purchase_Rentals")}</li>
                                <li>{t("words.Kindle_Unlimited")}</li>
                                <li>{t("words.Content_Devices")}</li>
                                <li>{t("words.Subscribe_Save_Items")}</li>
                                <li>{t("words.Membership_Subscription")}</li>
                                <li>{t("words.Music_Library")}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {showSinin && <div className={classes.background}></div>}
                    </div>
                  )}
                </>
              )}
            </Link>
           

            <Link to="/orders">
              <p>{t("words.return")}</p>
              <span>{t("words.orders")}</span>
            </Link>

            <Link to="/cart" className={classes.cart}>
              <FaCartArrowDown size={35} />

              <span>{totalItem}</span>
             {t("words.cart")}
            </Link>
          </div>
        </div>
        <LowerHeader t={t} i18n={i18n} />
      </section>
    </section>
  );
}

export default Header;
