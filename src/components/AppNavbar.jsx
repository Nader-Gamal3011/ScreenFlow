import { useContext } from "react";

import { LunchRecorderContext } from "../App";

import { useNavigate } from "react-router-dom";

import "../index.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { CameraVideo } from "react-bootstrap-icons";
import { ArrowLeft } from "react-bootstrap-icons";

const AppNavbar = () => {
  const { lunch, setLunch } = useContext(LunchRecorderContext);

  const navigate = useNavigate();
  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-white"
        style={{ padding: "10px 30px", borderRadius: "30px" }}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            className="d-flex justify-content-start align-items-center gap-2"
          >
            <div className="icon-dev">
              <CameraVideo size={24} className="video-icon" />
            </div>
            <h3 className="m-0">ScreenFlow</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {lunch && (
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    setLunch();
                    navigate("/recorder");
                  }}
                >
                  Lunch App
                </Button>
              )}
              {!lunch && (
                <div className="icon-dev">
                  <ArrowLeft
                    size={24}
                    className="video-icon"
                    onClick={() => {
                      setLunch();
                      navigate("/");
                    }}
                  />
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
