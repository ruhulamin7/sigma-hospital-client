import React, { useState } from "react";
import {
  NavLink, Offcanvas
} from "react-bootstrap";
import { FiAlignRight, FiChevronDown, FiXCircle } from "react-icons/fi";
import { FaShoppingCart, FaHeart, FaShoppingBasket } from "react-icons/fa";
import {GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import logo from "../../../images/logo/logo.png";
import "./Header.css";
import { useSelector } from "react-redux";
import useFirebase from "../../../hooks/useFirebase";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);


  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push('menuq2');
  } else {
    boxClass.push('');
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const [isMenuSubMenu1, setMenuSubMenu1] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  const toggleSubmenu1 = () => {
    setMenuSubMenu1(isMenuSubMenu1 === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  let boxClassSubMenu1 = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push('sub__menus__Active');
  } else {
    boxClassSubMenu.push('');
  }
  if (isMenuSubMenu1) {
    boxClassSubMenu1.push('sub__menus__Active');
  } else {
    boxClassSubMenu.push('');
  }


  // const user = useSelector((state) => state?.auth?.value)
  const { user , logout} = useFirebase()
  
  console.log(user, "user");
  return (
    <header className="header__middle">
      <div className="container-fluid">
        <div className="row d-flex">

          {/* Add Logo  */}
          <div className="col-8 col-md-2">
          <div className="header__middle__logo">
            <Link exact activeClassName='is-active' to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
         </div>

          <div className="col-4 col-md-10 ">
          <div className="header__middle__menus">
            <nav className="main-nav" >
              {/* Responsive Menu Button*/}
              {isResponsiveclose === true ? <>
                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <GrClose />   </span>
              </> : <>
                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <GiHamburgerMenu />   </span>
              </>}


              <ul className={boxClass.join(' ')}>
                <li className="menu-item" >
                  <Link exact activeClassName='is-active' onClick={toggleClass} to="/home"> Home </Link>
                </li>
                <li className="menu-item " ><Link onClick={toggleClass} activeClassName='is-active' to="/doctor"> Doctor </Link> </li>
                <li onClick={toggleSubmenu1} className="menu-item sub__menus__arrows" > <Link to="#"> Specialization <FiChevronDown /> </Link>
                  <ul className={boxClassSubMenu1.join(' ')} >
                    <li> <Link onClick={toggleClass} activeClassName='is-active' to="/specialization/oncologist"> Oncologist </Link> </li>
                    <li> <Link onClick={toggleClass} activeClassName='is-active' to="/specialization/ent-specialist"> ENT Specialist </Link> </li>
                    <li> <Link onClick={toggleClass} activeClassName='is-active' to="/specialization/neurologist"> Cardiologist </Link> </li>
                    <li> <Link onClick={toggleClass} activeClassName='is-active' to="/specialization/audiologist"> Audiologist </Link> </li>
                    <li> <Link onClick={toggleClass} activeClassName='is-active' to={`/specialization/psychiatrists`}> Psychiatrists </Link> </li>
                  </ul>
                </li>
                <li className="menu-item " ><Link onClick={toggleClass} activeClassName='is-active' to="/contact"> Blog </Link> </li>
                <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Pages <FiChevronDown /> </Link>
                  <ul className={boxClassSubMenu.join(' ')} >
                    <li> <Link onClick={toggleClass} activeClassName='is-active' to="/"> Shop </Link> </li>
                    <li> <Link onClick={toggleClass} activeClassName='is-active' to="/about"> About Us </Link> </li>
                    <li> <Link onClick={toggleClass} activeClassName='is-active' to="/service"> Service </Link> </li>
                    <li> <Link onClick={toggleClass} activeClassName='is-active' to="/team"> Our Team </Link> </li>
                    <li> <Link onClick={toggleClass} activeClassName='is-active' to="/faq"> FAQ </Link> </li>
                    <li> <Link onClick={toggleClass} activeClassName='is-active' to="/contact"> Contact Us </Link> </li>
                  </ul>
                </li>
               {user?.email ? <li className="menu-item"  ><a  onClick={()=> logout()} > Logout </a> </li>: <li className="menu-item" ><Link onClick={toggleClass} activeClassName='is-active' to="/login"> Login </Link> </li>}
                <button className="header-btn">
                Appointment <i className="fas fa-plus header-icon"></i>
                </button>
                <Link to="/dashboard" className="header-btn text-decoration-none btn-hover">
                Deshboard <i className="fas fa-plus header-icon"></i>
                </Link>
               
              </ul>
              <span onClick={toggleShow} className="icon">
              <GiHamburgerMenu />
              </span>
              {/* 
              
              <span className="icon position-relative">
                <FaShoppingBasket />
                <ul className="position-absolute  icon-position">
                  <li>
                    <FaHeart />
                  </li>
                  <li>
                    <FaShoppingCart />
                  </li>
                  </ul>
              </span> */}
               
            </nav>
           
              <Offcanvas placement={"end"} show={show} onHide={handleClose}>
                 <Offcanvas.Header closeButton>
                 <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
               <Offcanvas.Body>
                 Some text as placeholder. In real life                elements you have chosen. Like, text, images, lists, etc.
               </Offcanvas.Body>
            </Offcanvas>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
