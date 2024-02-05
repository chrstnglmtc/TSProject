import React from "react";
// import Header from "./Header";
import "../TeamDComponents/TeamD_Css/verification.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiFillSafetyCertificate } from "react-icons/ai";
import Team_D_HeaderLanding from "./Team_D_HeaderLanding";
import Verification from './../TeamAComponents/components/Verification';

const Team_D_Verif_nonuser = () => {
  return (
    <div>
      <Team_D_HeaderLanding />
      <section className="verification_container">
        <div className="verification_title">
            <span></span>
        </div>
        <div className="verification_search">
          <div className="left">
            <h2>Verify Course Certificate</h2>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Enter Serial Number"
            />
            <Button variant="primary" className="verify">
              Verify
            </Button>
          </div>
          <div className="right">
            <div className="nameVerification">
              <Form.Label>Name</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Joshua Allada"
                readOnly
              />
            </div>
            <div className="serialVerification">
              <Form.Label>Certificate Serial No. <AiFillSafetyCertificate className="icon"/></Form.Label>
              <Form.Control
                  size="sm"
                  type="text"
                  placeholder="20190141470"
                  readOnly
                />
            </div>
            <div className="serialVerification">
              <Form.Label>Course Certified</Form.Label>
              <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Java Programming"
                  readOnly
                />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team_D_Verif_nonuser;
