import React, { useState } from "react";
import "./FormStyle.css"; // Make sure to have the CSS file in the same directory as this component

const Form = () => {
  // State to manage form input values
  const [ethAddress, setEthAddress] = useState("");
  const [amountToSend, setAmountToSend] = useState("");
  const [otp, setOtp] = useState("");

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any desired actions on form submission, such as sending data to a server
    console.log("Form submitted!");
  };

  return (
    <div className="main-container">
      <form onSubmit={handleSubmit}>
      <div className="form-container">
        <div className="input-box">
          <input
            type="text"
            id="input-address"
            value={ethAddress}
            onChange={(e) => setEthAddress(e.target.value)}
            className="input-field"
          />
          <span className="place-holder">ETH Address</span>
        </div>

        <div className="input-box">
          <input
            type="text"
            id="input-amount"
            value={amountToSend}
            onChange={(e) => setAmountToSend(e.target.value)}
            className="input-field"
          />
          <span className="place-holder">Amount to send</span>
        </div>

        <div className="input-box">
          <input
            type="number"
            id="input-otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="input-field"
          />
          <span className="place-holder">OTP Authentication</span>
        </div>

        <div className="input-box">
        <button type="submit" className="send-token-button">
          SEND TOKENS
        </button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default Form;
