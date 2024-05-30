import React, { useState, useEffect, useRef } from "react";
import classes from "./Footer.module.css";
import { TbWorld } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoRadioButtonOffSharp } from "react-icons/io5";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { useTranslation } from "react-i18next";
import LowerFooter from "./LowerFooter";
import { Link } from "react-router-dom";

function Footer() {
  const ref = useRef();


  const [showlang, setShowlang] = useState(false);

  const [t, i18n] = useTranslation("");

  const handlechangeLanguage = (lang) => {
    i18n.changeLanguage(lang);

  };

  useEffect(() => {
    document.body.addEventListener("mouseover", (e) => {
      if (e.target.contains(ref.current)) {
        // setShowdetail(false)
        setShowSinin(false);
      }
    });
  }, []);
  return (
    <>
      <div className={classes.main_footer_container}>
        <div className={classes.black}>
          <a href="">Back to top</a>
        </div>
        <div className={classes.Footer_Container}>
          <div className={classes.Footer_containerlist}>
            <div>
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
            <div>
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
                <li>
                  <MdKeyboardArrowRight size={15} />{" "}
                  <span>
                    <a href="">See More make Money with us</a>
                  </span>
                </li>
              </ul>
            </div>
            <div>
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
            <div>
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

            <br />
            <br />
            <br />
            <br />
          </div>

          <div className={classes.lower_footer}>
            <div className={classes.logo}>
              <a href="">
                <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt=""
                />
              </a>
            </div>
            <div className={classes.last_footer} >
              <div onMouseLeave={() => setShowlang(false)}>
                <span className={classes.language}>
                  <TbWorld size={14} />
                  <span>English</span>
                  <MdOutlineUnfoldMore 
                   onMouseOver={() => setShowlang(true)} />
                </span>
                {showlang && (
                  <div
                    ref={ref}
                    className={classes.container}
                    onMouseLeave={() => setShowlang(false)}
                  >
                    <div className={classes.language_detail_container}>
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
                              <a href=""></a>
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
                              <Link to="">Deuch - DE</Link>{" "}
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
                              <Link to="">português - PT</Link>{" "}
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
                      <div></div>
                    </div>
                  </div>
                )}
              </div>

              <div className={classes.usd}>
                <a href="">$ USD - U.S.Dollar</a>
              </div>

              <div className={classes.flag}>
                <a href="">
                  <img
                    src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                    width={25}
                    alt=""
                  />
                  <span>United States</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <LowerFooter/>
      </div>
    </>
  );
}

export default Footer;
