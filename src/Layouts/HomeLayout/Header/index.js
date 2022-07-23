import React, { useState } from "react";
import style from "./style.module.css";
import { Logo } from "./Logo";
import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const [pos, setPos] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  console.log(setPos);
  return (
    <>
      <div
        className={
          pos < 350
            ? style["header-container-top"]
            : style["header-container-onScroll"]
        }
      >
        <div
          onClick={() => navigate("/")}
          className={`${style["header-logo-container"]} cursor-pointer `}
        >
          <Logo />
        </div>

        <div className={style["header-content-menu"]}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/courses"> Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className={style["header-email"]}>
          <a
            href="mailto:tanjimtc74@gamil.com.com?subject=information"
            className={"flex"}
          >
            <FaEnvelope style={{ display: "inline" }} /> info@coderplanet.com
          </a>

          <a href="tel:+1-347-849-7449" className={"flex"}>
            {" "}
            <FaPhoneAlt style={{ display: "inline" }} /> +1-5555-888-4444
          </a>
        </div>

        <div className={style["header-mobile-menu-icon"]}>
          <RiMenu4Fill onClick={() => setShowMobileMenu(!showMobileMenu)} />
        </div>
      </div>

      <div
        className={`${style["header-mobile-content-menu"]} ${
          showMobileMenu && style["header-mobile-content-menu-show"]
        }`}
      >
        <ImCross
          className={style["header-mobile-menu-close-icon"]}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
        <ul>
          <li onClick={() => navigate("/")}>
            <>
              <AiOutlineHome
                className={style["header-mobile-content-menu-li-icon"]}
              />
              <span className={style["header-mobile-content-menu-li-text"]}>
                Home
              </span>
            </>
          </li>

          <li onClick={() => navigate("/about")}>
            <>
              <BsPeople
                className={style["header-mobile-content-menu-li-icon"]}
              />
              <span className={style["header-mobile-content-menu-li-text"]}>
                About
              </span>
            </>
          </li>
          <li onClick={() => navigate("/courses")}>
            <RiServiceLine
              className={style["header-mobile-content-menu-li-icon"]}
            />
            <span className={style["header-mobile-content-menu-li-text"]}>
              Courses
            </span>
          </li>
          <li onClick={() => navigate("/contact")}>
            <AiOutlinePhone
              className={style["header-mobile-content-menu-li-icon"]}
            />
            <span className={style["header-mobile-content-menu-li-text"]}>
              Contact Us
            </span>
          </li>

          <li>
            <div className={style["header-email-mobile"]}>
              <a
                href="mailto:info@experts portal?subject=information"
                className="mb-3 flex"
              >
                <FaEnvelope style={{ display: "inline" }} /> info@experts portal
              </a>

              <a href="tel:+1-347-849-7449" className={"flex"}>
                <FaPhoneAlt style={{ display: "inline" }} /> +1-347-849-7449
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
