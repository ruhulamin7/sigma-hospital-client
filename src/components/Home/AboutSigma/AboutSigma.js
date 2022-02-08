import React from "react";
import "./AboutSigma.css";
import watch from "../../../image/watch.png";
import signature from "../../../image/signature.png";
import doctor from "../../../image/Doctor.jpg";
import { Table } from "react-bootstrap";

const AboutSigma = () => {
  return (
    <div className="sigma-about-fild pb-5 pt-5 ">
      <div className="row mx-2 pt-3  ">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <p className="about-heding ">About Sigma Central Hospital</p>
          <h3 className="welcome-msg">
            <strong className="bold-welcome">Welcome To Sigma</strong> Central
            Hospital
          </h3>
          <p className="content">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </p>

          <div className="opning-time ">
            <img src={watch} alt="" className="watch" />
            <h4 className="time">Opening Time</h4>
            <div className="table-data">
              <Table>
                <tbody>
                  <tr>
                    <td>Mondy-Friday</td>
                    <td>6:00 – 7:00 pm</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>9:00 – 8:00 pm</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>10:00 – 9:00 pm</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 ml-5">
          <ul>
            <li>
              <i className="far fa-check-square checkbox-icon"></i>
              Treats minor illnesses
            </li>
            <li>
              <i className="far fa-check-square checkbox-icon"></i>
              Answers health questions
            </li>
            <li>
              <i className="far fa-check-square checkbox-icon"></i>
              Conducts health checkups
            </li>
            <li>
              <i className="far fa-check-square checkbox-icon"></i>
              Performs routine health tests
            </li>
            <li>
              <i className="far fa-check-square checkbox-icon"></i>
              Orthopaedic surgeon
            </li>
            <li>
              <i className="far fa-check-square checkbox-icon"></i>
              Endocrinologist
            </li>
            <li>
              <i className="far fa-check-square checkbox-icon"></i>
              Cardiothoracic surgeon
            </li>

            <li>
              <i className="far fa-check-square checkbox-icon"></i>
              Specialty physicians
            </li>
            <li>
              <i className="far fa-check-square checkbox-icon"></i>
              Best in class equipment's
            </li>
            <li>
              <i className="far fa-check-square checkbox-icon"></i>
              Answers health questions
            </li>
          </ul>
          <h4 className="name">Briar Ford</h4>
          <p className="co-funder">CEO & FOUNDER</p>
          <img src={signature} alt="" className="signature" /> <br />
          <button className="appointment-btn">
            Get Appointment <i className="fas fa-plus btn-icon"></i>
          </button>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 ">
          <img src={doctor} alt="" className="doctor-image img-fluid " />
        </div>
      </div>
    </div>
  );
};

export default AboutSigma;
