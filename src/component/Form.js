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
          <label htmlFor="input-address">ETH Address</label>
          <input
            type="text"
            id="input-address"
            value={ethAddress}
            onChange={(e) => setEthAddress(e.target.value)}
          />

          <label htmlFor="input-amount">Amount to send</label>
          <input
            type="text"
            id="input-amount"
            value={amountToSend}
            onChange={(e) => setAmountToSend(e.target.value)}
          />

          <label htmlFor="input-otp">OTP Authentication</label>
          <input
            type="number"
            id="input-otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button type="submit" className="send-token-button">SEND TOKENS</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
