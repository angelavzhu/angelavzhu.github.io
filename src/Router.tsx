import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { createTheme, ThemeProvider } from '@mui/material/styles';


import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./Home"
import Work from "./Work"
import About from "./About"
import Play from "./Play"
import Resume from "./Resume"

import Evently from "./case-studies/Evently"
import CRC from "./case-studies/CRC"
import AlgoLink from "./case-studies/AlgoLink"
// ============ end imports ==============

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  typography: {
    accent: {
      fontFamily: "Marcellus",
      fontSize: "2rem",
      fontWeight: "normal"
    },
    heading1: {
      fontFamily: "Marcellus",
      fontSize: "1.75rem",
      fontWeight: "normal"
    },
    heading2: {
      fontFamily: "Libre Franklin",
      fontSize: "1.5rem"
    },
    heading3: {
      fontFamily: "Libre Franklin",
      fontSize: "1.25rem"
    },
    body1: {
      fontFamily: "Libre Franklin",
      fontSize: "1rem"
    },
    body2: {
      fontFamily: "Libre Franklin",
      fontSize: "0.8rem"
    },


  }
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar position="fixed" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/evently" element={<Evently />} />
          <Route path="/crc" element={<CRC />} />
          <Route path="/algolink" element={<AlgoLink />} />
          <Route path="/about" element={<About />} />
          <Route path="/play" element={<Play />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer color="black" />
      </BrowserRouter>
    </ThemeProvider>
  );
}

root.render(<App />);