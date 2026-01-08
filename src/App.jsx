import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";

import "./App.css";
import Landing from "./pages/Landing";
import Recorder from "./pages/Recorder";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

export let LunchRecorderContext = createContext({});

function App() {
  const [lunch, setLunch] = useState(true);

  function toggleLunchRecorder() {
    setLunch((prev) => !prev);
  }

  return (
    <LunchRecorderContext.Provider
      value={{
        lunch,
        setLunch: toggleLunchRecorder,
      }}
    >
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/recorder" element={<Recorder />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </LunchRecorderContext.Provider>
  );
}

export default App;
