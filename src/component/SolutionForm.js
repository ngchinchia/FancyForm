import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { FormSchema } from "../schema/FormValidationSchema";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./FormStyle.css";

const SolutionForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [valuesSubmitted, setValuesSubmit] = useState(null);

  // const data = JSON.stringify(valuesSubmitted)

  return (
    <div className="main-container">
      {isLoading ? (
        <div>
          <ClimbingBoxLoader
            color={"#00dfc4"}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : isSubmitted ? (
        <div className="values-submitted">
          <h1 className="title-success">Transaction Completed!</h1>
          <p>You sent to eth address: {valuesSubmitted.ethAddress} </p>
          <p>Amount: {valuesSubmitted.inputAmount} ETH</p>
        </div>
      ) : (
        <Formik
          initialValues={{
            ethAddress: "",
            inputAmount: "",
            otpAuthentication: "",
          }}
          validationSchema={FormSchema}
          onSubmit={(values, { setSubmitting }) => {
            setIsLoading(true);
            setTimeout(() => {
              setSubmitting(false);
              setIsSubmitted(true);
              setValuesSubmit(values);
              setIsLoading(false);
            }, 5000);
          }}
        >
          {({ errors, touched, isSubmitting, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="form-container">
                <h1 className="app-title">Ethereum Mask</h1>
                <div className="input-box">
                  <Field
                    name="ethAddress"
                    className="input-field"
                    placeholder=" "
                  />
                  <span className="place-holder">ETH Address</span>
                  {errors.ethAddress && touched.ethAddress ? (
                    <div className="error-eth">{errors.ethAddress}</div>
                  ) : null}
                </div>

                <div className="input-box">
                  <Field
                    name="inputAmount"
                    className="input-field"
                    type="number"
                    placeholder=" "
                  />
                  <span className="place-holder">Amount to send</span>
                  {errors.inputAmount && touched.inputAmount ? (
                    <div className="error-eth">{errors.inputAmount}</div>
                  ) : null}
                </div>

                <div className="input-box">
                  <Field
                    name="otpAuthentication"
                    className="input-field"
                    placeholder=" "
                  />
                  <span className="place-holder">OTP Authentication</span>
                  {errors.otpAuthentication && touched.otpAuthentication ? (
                    <div className="error-eth">{errors.otpAuthentication}</div>
                  ) : null}
                </div>

                <div className="input-box">
                  <button
                    type="submit"
                    className="send-token-button"
                    disabled={isSubmitting}
                  >
                    SEND TOKENS
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default SolutionForm;
