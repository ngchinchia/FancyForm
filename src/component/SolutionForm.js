import React, {useState}from "react";
import { Formik, Form, Field } from "formik";
import{ FormSchema } from "../schema/FormValidationSchema"
import "./FormStyle.css"; 

const SolutionForm = () => {
  const [isFocused, setIsFocused] = useState(null);

  const handleEthFocus = (input) => {
    setIsFocused(input)
  }

  return (
    <div className="main-container">
      <Formik
        initialValues={{
          ethAddress: "",
          inputAmount: "",
          otpAuthentication: "",
        }}
        validationSchema={FormSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
       {({ errors, touched }) => (
      <Form>
        <div className="form-container">
          <div className="input-box">
            <Field name="ethAddress" className="input-field"
           />
            <span className="place-holder">ETH Address</span>
            {errors.ethAddress && touched.ethAddress ? (
             <div className="error-eth">{errors.ethAddress}</div>
           ) : null}
          </div>

          <div className="input-box">
          <Field name="inputAmount" className="input-field" type="number" />
            <span className="place-holder">Amount to send</span>
            {errors.inputAmount && touched.inputAmount ? (
             <div className="error-eth">{errors.inputAmount}</div>
           ) : null}
          </div>

          <div className="input-box">
          <Field name="otpAuthentication" className="input-field"/>
            <span className="place-holder">OTP Authentication</span>
            {errors.otpAuthentication && touched.otpAuthentication ? (
             <div className="error-eth">{errors.otpAuthentication}</div>
           ) : null}
          </div>

          <div className="input-box">
            <button type="submit" className="send-token-button">
              SEND TOKENS
            </button>
          </div>
        </div>
        </Form>
        )}
      </Formik>
    </div>
  );
};

export default SolutionForm;
