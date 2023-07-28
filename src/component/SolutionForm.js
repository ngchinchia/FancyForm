import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import "./FormStyle.css"; // Make sure to have the CSS file in the same directory as this component

const SolutionForm = () => {
  // State to manage form input values
  const [ethAddress, setEthAddress] = useState("");
  const [amountToSend, setAmountToSend] = useState("");
  const [otp, setOtp] = useState("");



  return (
    <div className="main-container">
      <Formik
        initialValues={{
          ethAddress: "",
          inputAmount: "",
          otpAuthentication: "",
        }}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        <div className="form-container">
          <div className="input-box">
            <Field name="ethAddress" className="input-field" />
            <span className="place-holder">ETH Address</span>
          </div>

          <div className="input-box">
          <Field name="inputAmount" className="input-field" />
            <span className="place-holder">Amount to send</span>
          </div>

          <div className="input-box">
          <Field name="otpAuthentication" className="input-field" />
            <span className="place-holder">OTP Authentication</span>
          </div>

          <div className="input-box">
            <button type="submit" className="send-token-button">
              SEND TOKENS
            </button>
          </div>
        </div>
      </Formik>
    </div>
  );
};

export default SolutionForm;
