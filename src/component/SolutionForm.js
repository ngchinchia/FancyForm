import React  from "react";
import { Formik, Form, Field } from "formik";
import{ FormSchema } from "../schema/FormValidationSchema"
import "./FormStyle.css"; 

const SolutionForm = () => {
 



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
            onFocus={() => handleEthFocus} />
            <span className="place-holder">ETH Address</span>
            {errors.ethAddress && touched.ethAddress ? (
             <div className="error-eth">{errors.ethAddress}</div>
           ) : null}
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
        </Form>
        )}
      </Formik>
    </div>
  );
};

export default SolutionForm;
