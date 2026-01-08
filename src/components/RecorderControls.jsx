import React from "react";

import { BorderBottom, Tv } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";

const steps = [
  {
    step: 1,
    description:
      'Click "Start Recording" and select the screen or window you want to record',
  },
  {
    step: 2,
    description:
      "Record your content - the timer will show your recording duration",
  },
  {
    step: 3,
    description: 'Click "Stop Recording" when you\'re done',
  },
  {
    step: 4,
    description: "Preview and download your recording",
  },
];

const RecorderControls = ({ isRecording, startRecording, stopRecording }) => {
  return (
    <div>
      <div style={{ textAlign: "center", margin: "100px 0" }}>
        <div
          style={{
            width: "70px",
            height: "70px",
            backgroundColor: "#eff6ff",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px auto ",
          }}
        >
          <Tv size={30} style={{ color: "#2563EB" }} />
        </div>
        <h1 style={{ color: "#2563EB", margin: "20px 0" }}>Ready to Record</h1>
        <p style={{ color: "#3f5b81ff", margin: "20px 0" }}>
          Click the button below to start recording your screen. You'll be able
          to choose which screen or window to share.
        </p>
        {!isRecording && (
          <Button variant="primary" onClick={startRecording}>
            Start Recording
          </Button>
        )}
        {isRecording && (
          <Button variant="danger" onClick={stopRecording}>
            Stop Recording
          </Button>
        )}
      </div>

      <div style={{backgroundColor:"#FFF", padding:"10px", borderRadius:"10px", marginBottom:"20px"}}>
        {steps.map((step, index) => {
          return (
            <div key={index} style={{display:"flex", alignItems:"center", gap:"10px"}}>
              <p style={{width:"30px", height:"30px", backgroundColor:"#eff6ff", color:"#2563EB", borderRadius:"50%",display:"flex", alignItems:"center",justifyContent:"center"}}>{step.step}</p>
              <p>{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecorderControls;
