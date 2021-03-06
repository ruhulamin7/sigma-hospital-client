import React, { useState } from "react";
import { Button, NavDropdown, Offcanvas } from "react-bootstrap";
import { AiOutlineUser, AiOutlineUsergroupDelete } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrHome } from "react-icons/gr";
import { HiOutlineLockClosed } from "react-icons/hi";
import {
  MdOutlineBloodtype,
  MdOutlineLocalPharmacy,
  MdOutlinePayment,
} from "react-icons/md";
import {
  RiLogoutCircleLine,
  RiNurseLine,
  RiSearchLine,
  RiWechatLine,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { logOut } from "../../../features/adminSlice";
import "./DashboardMain.css";

const DashboardMain = () => {
  const admin = useSelector((state) => state.admin.admin);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  console.log(admin, "maindashboard");

  return (
    <>
      <div className="dashboard_mobile_header">
        <div>
          <Button
            className="d-block d-md-none dashboard_hamburger_btn"
            variant="primary"
            onClick={handleShow}
          >
            <GiHamburgerMenu />
          </Button>
        </div>

        <div className="dashboard_mobole_logo  d-block d-md-none">
          <Link to="/home">
            <img src="https://i.ibb.co/hRX83Sc/logo.png" alt="" />
          </Link>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className="offcanvas_header">
          <Offcanvas.Title>Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="dashboard_left_side_bar">
            <div className="dasboard_user">
              <img src={admin?.photoURL} alt="doctor or user" />
              <div>
                <span>Welcome, </span>
                <div>
                  <NavDropdown
                    id="basic-nav-dropdown"
                    className="basic_nav_dropdown_custom"
                    title={admin.displayName}
                  >
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item
                      as={Link}
                      to=""
                      className="dash_drop_item"
                    >
                      <RiLogoutCircleLine />
                      <span onClick={() => dispatch(logOut())}>Logout</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </div>
            </div>
            <hr />
            <div className="dasboard_leftbar_counter">
              <div>
                <p>Exp</p>
                <span className="dasboard_leftbar_count">18</span>
              </div>
              <div>
                <p>Awards</p>
                <span className="dasboard_leftbar_count">13</span>
              </div>
              <div>
                <p>Clients</p>
                <span className="dasboard_leftbar_count">213</span>
              </div>
            </div>
            <ul className="dashboard_left_nav">
              {admin.role === "admin" && (
                <li className="dashboard_nav_item">
                  <Link to="/dashboard">
                    <span className="dashboard_nav_icon">
                      <span className="nav_icon">
                        <GrHome />
                      </span>
                      <span>Dashboard</span>
                    </span>
                  </Link>
                </li>
              )}
              {admin.role === "admin" && (
                <li>
                  <Link
                    /* className="btn btn-primary" */
                    data-bs-toggle="collapse"
                    to="#collapseBloodBank"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <span className="dashboard_nav_icon">
                      <span className="nav_icon">
                        <MdOutlineBloodtype />
                      </span>
                      <span>Blood Bank</span>
                    </span>
                    <BsChevronDown />
                  </Link>

                  <div className="collapse" id="collapseBloodBank">
                    <ul className="dashboard_sub_menu">
                      <li>
                        <Link to="/dashboard/bloodBankAdmin">
                          <span className="nav_icon">--</span>
                          <span>Blood Bank Home</span>
                        </Link>
                        <Link to="/dashboard/manageAllDonors">
                          <span className="nav_icon">--</span>
                          <span>Manage All Donors</span>
                        </Link>
                        <Link to="/dashboard/ManageBloodDonations">
                          <span className="nav_icon">--</span>
                          <span>Manage Donations</span>
                        </Link>
                        <Link to="/dashboard/manageBloodRequests">
                          <span className="nav_icon">--</span>
                          <span>ManageBloodRequests</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              )}

              <li>
                <Link to="/dashboard/appointment">
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <FaRegCalendarAlt />
                    </span>
                    <span>Appointment</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/chat">
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <RiWechatLine />
                    </span>
                    <span>Chat App</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/blogForm">
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <RiWechatLine />
                    </span>
                    <span>Create Blog</span>
                  </span>
                </Link>
              </li>
              {admin.role === "admin" && (
                <li>
                  <Link
                    /* className="btn btn-primary" */
                    data-bs-toggle="collapse"
                    to="#collapseDoctors"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <span className="dashboard_nav_icon">
                      <span className="nav_icon">
                        <AiOutlineUser />
                      </span>
                      <span>Doctors</span>
                    </span>
                    <BsChevronDown />
                  </Link>
                  <div className="collapse" id="collapseDoctors">
                    <ul className="dashboard_sub_menu">
                      <li>
                        <Link to="/dashboard/allDoctors">
                          <span className="nav_icon">--</span>
                          <span>All Doctors</span>
                        </Link>
                        <Link to="/dashboard/addDoctors">
                          <span className="nav_icon">--</span>
                          <span>Add Doctors</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              )}

              {(admin.role === "nurse" || admin.role === "admin") && (
                <li>
                  <Link
                    /* className="btn btn-primary" */
                    data-bs-toggle="collapse"
                    to="#collapseNurses"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <span className="dashboard_nav_icon">
                      <span className="nav_icon">
                        <RiNurseLine />
                      </span>
                      <span>Nurses</span>
                    </span>
                    <BsChevronDown />
                  </Link>

                  <div className="collapse" id="collapseNurses">
                    <ul className="dashboard_sub_menu">
                      <li>
                        {admin.role === "admin" && (
                          <>
                            <Link to="/dashboard/allNurse">
                              <span className="nav_icon">--</span>
                              <span>All Nurses</span>
                            </Link>
                            <Link to="/dashboard/addNurse">
                              <span className="nav_icon">--</span>
                              <span>Add Nurses</span>
                            </Link>
                          </>
                        )}
                        {(admin.role === "nurse" || admin.role === "admin") && (
                          <Link to="/dashboard/appointedpatient">
                            <span className="nav_icon">--</span>
                            <span>Appointed Patients</span>
                          </Link>
                        )}
                      </li>
                    </ul>
                  </div>
                </li>
              )}

              {admin.role === "doctor" && (
                <li>
                  <Link
                    /* className="btn btn-primary" */
                    data-bs-toggle="collapse"
                    to="#collapsePatients"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <span className="dashboard_nav_icon">
                      <span className="nav_icon">
                        <AiOutlineUsergroupDelete />
                      </span>

                      <span>Patients</span>
                    </span>
                    <BsChevronDown />
                  </Link>

                  <div className="collapse" id="collapsePatients">
                    <ul className="dashboard_sub_menu">
                      <li>
                        <Link to="/dashboard/patientsInfo">
                          <span className="nav_icon">--</span>
                          <span>All Patients</span>
                        </Link>
                        <Link to="/dashboard/appointment">
                          <span className="nav_icon">--</span>
                          <span>Add Patient</span>
                        </Link>
                        {/* <Link to="/dashboard/appointedpatient">
                        <span className="nav_icon">--</span>
                        <span>Appointed Patients</span>
                      </Link> */}
                        <Link to="/dashboard/patient/invoice">
                          <span className="nav_icon">--</span>
                          <span>Invoice</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              )}

              {(admin.role === "admin" || admin.role === "recip") && (
                <li>
                  <Link
                    data-bs-toggle="collapse"
                    to="#collapsePayments"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <span className="dashboard_nav_icon">
                      <span className="nav_icon">
                        <MdOutlinePayment />
                      </span>
                      <span>Access</span>
                    </span>
                    <BsChevronDown />
                  </Link>
                  <div className="collapse" id="collapsePayments">
                    <ul className="dashboard_sub_menu">
                      <li>
                        <Link to="/dashboard/patientAccess">
                          <span className="nav_icon">--</span>
                          <span>Patient Access</span>
                        </Link>
                        {/* <Link to="/dashboard">
                        <span className="nav_icon">--</span>
                        <span>Add Payments</span>
                      </Link>
                      <Link to="/dashboard">
                        <span className="nav_icon">--</span>
                        <span>Invoie</span>
                      </Link> */}
                      </li>
                    </ul>
                  </div>
                </li>
              )}

              {(admin.role === "admin" || admin.role === "pharma") && (
                <li>
                  <Link
                    /* className="btn btn-primary" */
                    data-bs-toggle="collapse"
                    to="#collapsePaymentss"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <span className="dashboard_nav_icon">
                      <span className="nav_icon">
                        <MdOutlineLocalPharmacy />
                      </span>
                      <span>Pharmacy</span>
                    </span>
                    <BsChevronDown />
                  </Link>
                  <div className="collapse" id="collapsePaymentss">
                    <ul className="dashboard_sub_menu">
                      <li>
                        <Link to="/dashboard/pharmacy">
                          <span className="nav_icon">--</span>
                          <span>Pharmacy</span>
                        </Link>
                        <Link to="/dashboard/order">
                          <span className="nav_icon">--</span>
                          <span>Order</span>
                        </Link>
                        <Link to="/dashboard/receive">
                          <span className="nav_icon">--</span>
                          <span>Receive</span>
                        </Link>

                        <Link to="/dashboard/invoice">
                          <span className="nav_icon">--</span>
                          <span>Invoice</span>
                        </Link>

                        <Link to="/dashboard/AddMedicine">
                          <span className="nav_icon">--</span>
                          <span>Add New Medicine</span>
                        </Link>

                        <Link to="/dashboard/Stockout">
                          <span className="nav_icon">--</span>
                          <span>Stock out Medicine</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              )}
              {/* <li>
              <Link
                data-bs-toggle="collapse"
                to="#collapseDepartments"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <ImStack />
                  </span>
                  <span>Departments</span>
                </span>
                <BsChevronDown />
              </Link>

              <div className="collapse" id="collapseDepartments">
                <ul className="dashboard_sub_menu">
                  <li>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Add Departments</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>All Departments</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Oncology</span>
                    </Link>
                    <Link to="/dashboard/">
                      <span className="nav_icon">--</span>
                      <span>Neurology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>ENT</span>
                    </Link>

                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Cardiology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Oncology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Audiology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Psychology</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li> */}

              {admin.role === "admin" && (
                <li>
                  <Link
                    data-bs-toggle="collapse"
                    to="#collapseAuthentications"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <span className="dashboard_nav_icon">
                      <span className="nav_icon">
                        <HiOutlineLockClosed />
                      </span>

                      <span>Authentications</span>
                    </span>
                    <BsChevronDown />
                  </Link>
                  <div className="collapse" id="collapseAuthentications">
                    <ul className="dashboard_sub_menu">
                      <li>
                        <Link to="/dashboard/adminRegister">
                          <span className="nav_icon">--</span>
                          <span>Register</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="dashboardHeader container-fluid">
        <div className="logo_area">
          <Link to="/home">
            <img src="https://i.ibb.co/hRX83Sc/logo.png" alt="" />
          </Link>
        </div>
        <div className="menu_area">
          <div className="search_area">
            <input type="text" placeholder="Search here..." />
            <RiSearchLine />
          </div>
          <div className="right_icon_area">
            <ul>
              <Link to="/dashboard/appointment">
                <li data-tag="Appointment">
                  <FaRegCalendarAlt />
                </li>
              </Link>
              <Link to="/dashboard/chat">
                <li data-noti="" data-tag="Chat">
                  <RiWechatLine />
                </li>
              </Link>
              {/* <li data-noti="" data-tag="Inbox">
                <AiOutlineMail />
              </li> */}
              {/* <li data-noti="" data-tag="Notification">
                <IoMdNotificationsOutline />
              </li> */}
              {/* <li data-tag="Setting">
                <GiSettingsKnobs />
              </li> */}
              <li data-tag="Logout" onClick={() => dispatch(logOut())}>
                <BiLogIn />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* left side bar */}
      <div className="dashboard_main">
        <div className="dashboard_left_side_bar d-none d-md-block">
          <div className="dasboard_user">
            <img src={admin?.photoURL} alt="doctor or user" />
            <div>
              <span>Welcome, </span>
              <div>
                <NavDropdown
                  title={admin?.displayName}
                  id="basic-nav-dropdown"
                  className="basic_nav_dropdown_custom"
                >
                  <NavDropdown.Item as={Link} to="" className="dash_drop_item">
                    <RiLogoutCircleLine />
                    <span onClick={() => dispatch(logOut())}>Logout</span>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
          </div>
          <hr />
          <div className="dasboard_leftbar_counter">
            <div>
              <p>Exp</p>
              <span className="dasboard_leftbar_count">18</span>
            </div>
            <div>
              <p>Awards</p>
              <span className="dasboard_leftbar_count">13</span>
            </div>
            <div>
              <p>Patients</p>
              <span className="dasboard_leftbar_count">213</span>
            </div>
          </div>

          <ul className="dashboard_left_nav">
            {admin.role === "admin" && (
              <li className="dashboard_nav_item">
                <Link to="/dashboard">
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <GrHome />
                    </span>
                    <span>Dashboard</span>
                  </span>
                </Link>
              </li>
            )}
            {admin.role === "admin" && (
              <li>
                <Link
                  /* className="btn btn-primary" */
                  data-bs-toggle="collapse"
                  to="#collapseBloodBank"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <MdOutlineBloodtype />
                    </span>
                    <span>Blood Bank</span>
                  </span>
                  <BsChevronDown />
                </Link>

                <div className="collapse" id="collapseBloodBank">
                  <ul className="dashboard_sub_menu">
                    <li>
                      <Link to="/dashboard/bloodBankAdmin">
                        <span className="nav_icon">--</span>
                        <span>Blood Bank Home</span>
                      </Link>
                      <Link to="/dashboard/manageAllDonors">
                        <span className="nav_icon">--</span>
                        <span>Manage All Donors</span>
                      </Link>
                      <Link to="/dashboard/ManageBloodDonations">
                        <span className="nav_icon">--</span>
                        <span>Manage Donations</span>
                      </Link>
                      <Link to="/dashboard/manageBloodRequests">
                        <span className="nav_icon">--</span>
                        <span>ManageBloodRequests</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            )}

            <li>
              <Link to="/dashboard/appointment">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <FaRegCalendarAlt />
                  </span>
                  <span>Appointment</span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/chat">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <RiWechatLine />
                  </span>
                  <span>Chat App</span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/blogForm">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <RiWechatLine />
                  </span>
                  <span>Create Blog</span>
                </span>
              </Link>
            </li>
            {admin.role === "admin" && (
              <li>
                <Link
                  /* className="btn btn-primary" */
                  data-bs-toggle="collapse"
                  to="#collapseDoctors"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <AiOutlineUser />
                    </span>
                    <span>Doctors</span>
                  </span>
                  <BsChevronDown />
                </Link>
                <div className="collapse" id="collapseDoctors">
                  <ul className="dashboard_sub_menu">
                    <li>
                      <Link to="/dashboard/allDoctors">
                        <span className="nav_icon">--</span>
                        <span>All Doctors</span>
                      </Link>
                      <Link to="/dashboard/addDoctors">
                        <span className="nav_icon">--</span>
                        <span>Add Doctors</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            )}

            {(admin.role === "nurse" || admin.role === "admin") && (
              <li>
                <Link
                  /* className="btn btn-primary" */
                  data-bs-toggle="collapse"
                  to="#collapseNurses"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <RiNurseLine />
                    </span>
                    <span>Nurses</span>
                  </span>
                  <BsChevronDown />
                </Link>

                <div className="collapse" id="collapseNurses">
                  <ul className="dashboard_sub_menu">
                    <li>
                      {admin.role === "admin" && (
                        <>
                          <Link to="/dashboard/allNurse">
                            <span className="nav_icon">--</span>
                            <span>All Nurses</span>
                          </Link>
                          <Link to="/dashboard/addNurse">
                            <span className="nav_icon">--</span>
                            <span>Add Nurses</span>
                          </Link>
                        </>
                      )}
                      {(admin.role === "nurse" || admin.role === "admin") && (
                        <Link to="/dashboard/appointedpatient">
                          <span className="nav_icon">--</span>
                          <span>Appointed Patients</span>
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              </li>
            )}

            {admin.role === "doctor" && (
              <li>
                <Link
                  /* className="btn btn-primary" */
                  data-bs-toggle="collapse"
                  to="#collapsePatients"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <AiOutlineUsergroupDelete />
                    </span>

                    <span>Patients</span>
                  </span>
                  <BsChevronDown />
                </Link>

                <div className="collapse" id="collapsePatients">
                  <ul className="dashboard_sub_menu">
                    <li>
                      <Link to="/dashboard/patientsInfo">
                        <span className="nav_icon">--</span>
                        <span>All Patients</span>
                      </Link>
                      <Link to="/dashboard/appointment">
                        <span className="nav_icon">--</span>
                        <span>Add Patient</span>
                      </Link>
                      {/* <Link to="/dashboard/appointedpatient">
                        <span className="nav_icon">--</span>
                        <span>Appointed Patients</span>
                      </Link> */}
                      <Link to="/dashboard/patient/invoice">
                        <span className="nav_icon">--</span>
                        <span>Invoice</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            )}

            {(admin.role === "admin" || admin.role === "recip") && (
              <li>
                <Link
                  data-bs-toggle="collapse"
                  to="#collapsePayments"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <MdOutlinePayment />
                    </span>
                    <span>Access</span>
                  </span>
                  <BsChevronDown />
                </Link>
                <div className="collapse" id="collapsePayments">
                  <ul className="dashboard_sub_menu">
                    <li>
                      <Link to="/dashboard/patientAccess">
                        <span className="nav_icon">--</span>
                        <span>Patient Access</span>
                      </Link>
                      {/* <Link to="/dashboard">
                        <span className="nav_icon">--</span>
                        <span>Add Payments</span>
                      </Link>
                      <Link to="/dashboard">
                        <span className="nav_icon">--</span>
                        <span>Invoie</span>
                      </Link> */}
                    </li>
                  </ul>
                </div>
              </li>
            )}

            {(admin.role === "admin" || admin.role === "pharma") && (
              <li>
                <Link
                  /* className="btn btn-primary" */
                  data-bs-toggle="collapse"
                  to="#collapsePaymentss"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <MdOutlineLocalPharmacy />
                    </span>
                    <span>Pharmacy</span>
                  </span>
                  <BsChevronDown />
                </Link>
                <div className="collapse" id="collapsePaymentss">
                  <ul className="dashboard_sub_menu">
                    <li>
                      <Link to="/dashboard/pharmacy">
                        <span className="nav_icon">--</span>
                        <span>Pharmacy</span>
                      </Link>
                      <Link to="/dashboard/order">
                        <span className="nav_icon">--</span>
                        <span>Order</span>
                      </Link>
                      <Link to="/dashboard/receive">
                        <span className="nav_icon">--</span>
                        <span>Receive</span>
                      </Link>

                      <Link to="/dashboard/invoice">
                        <span className="nav_icon">--</span>
                        <span>Invoice</span>
                      </Link>

                      <Link to="/dashboard/AddMedicine">
                        <span className="nav_icon">--</span>
                        <span>Add New Medicine</span>
                      </Link>

                      <Link to="/dashboard/Stockout">
                        <span className="nav_icon">--</span>
                        <span>Stock out Medicine</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            )}
            {/* <li>
              <Link
                data-bs-toggle="collapse"
                to="#collapseDepartments"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <ImStack />
                  </span>
                  <span>Departments</span>
                </span>
                <BsChevronDown />
              </Link>

              <div className="collapse" id="collapseDepartments">
                <ul className="dashboard_sub_menu">
                  <li>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Add Departments</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>All Departments</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Oncology</span>
                    </Link>
                    <Link to="/dashboard/">
                      <span className="nav_icon">--</span>
                      <span>Neurology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>ENT</span>
                    </Link>

                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Cardiology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Oncology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Audiology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Psychology</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li> */}

            {admin.role === "admin" && (
              <li>
                <Link
                  data-bs-toggle="collapse"
                  to="#collapseAuthentications"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <HiOutlineLockClosed />
                    </span>

                    <span>Authentications</span>
                  </span>
                  <BsChevronDown />
                </Link>
                <div className="collapse" id="collapseAuthentications">
                  <ul className="dashboard_sub_menu">
                    <li>
                      <Link to="/dashboard/adminRegister">
                        <span className="nav_icon">--</span>
                        <span>Register</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            )}
          </ul>
        </div>
        <div className="dashboard_content_area">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
