import './App.css';
import React, { Component,useState } from 'react';
import OtpInput from 'react-otp-input';

function App() {
  const [otp,setotp] = useState("")
  return (
    <>
      <div className="container">
        <h1> Phone Verification</h1>
        <hr size="1" width="95%" color="black" />
        <h3>Enter The OTP you resived on 82668-8XXXX </h3>
        <OtpInput
          inputStyle={{margin: "10px",
            height: "35px",
            width: "65px",
            border: "none",
            borderRadius: "5px",
            textAlign: "center",
            fontFamily: "arimo",
            fontSize: "1.2rem",
            background: "#eef2f3"}}
          value={otp}
          onChange={e=>setotp(e)}
          numInputs={6}
          separator={<span>-</span>}
        />
        <a href="#" className="number">Change Number</a>
        <a href="#" className="resend">Re-send OTP</a>
        {/* <!-- <button>Change Number</button>
      <button>Re-send OTP</button> --> */}
        

        <button>Verify Phone Number</button>
      </div>
    </>
  );
}

export default App;
