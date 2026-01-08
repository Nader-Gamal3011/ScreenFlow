import { useContext } from "react";

import { LunchRecorderContext } from "../App";

import { useNavigate } from "react-router-dom";

import "../index.css";

import { Stars } from "react-bootstrap-icons";
import { CameraVideo } from "react-bootstrap-icons";

import Button from "react-bootstrap/Button";
import Features from "./Features";

const LandingUI = () => {
  const { setLunch } = useContext(LunchRecorderContext);
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <div className="landing-header text-center">
        <p style={{ backgroundColor: "#eff6ff" }}>
          <Stars />
          Free • No Sign-Up Required
        </p>
        <h1>Record Your Screen</h1>
        <h2>In Seconds</h2>
        <p>
          Simple, fast, and free screen recording. No installation, no sign-up.
          Just click and record.
        </p>
        <Button
          variant="primary"
          onClick={() => {
            navigate("/recorder");
            setLunch();
          }}
          className=" d-flex align-items-center gap-2 m-auto"
        >
          <CameraVideo />
          Get Started Free
        </Button>
      </div>
      <Features />
    </div>
  );
};

export default LandingUI;
