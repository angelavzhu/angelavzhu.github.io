import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

import NavBarMobile from "./components/NavBarMobile"
import NavBarDesktop from "./components/NavBarDesktop"
import Footer from "./components/Footer"
import Home from "./Home"
import About from "./About"
import Play from "./Play"
import Evently from "./case-studies/Evently"
import CRC from "./case-studies/CRC"
import AlgoLink from "./case-studies/AlgoLink"
// ============ end imports ==============

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  typography: {
    accent: {
      fontFamily: "Over The Rainbow",
      fontSize: "2.6rem",
      fontWeight: "normal"
    },
    heading1: {
      fontFamily: "Karla",
      fontSize: "1.75rem",
      fontWeight: "normal"
    },
    heading2: {
      fontFamily: "Karla",
      fontSize: "1.5rem"
    },
    heading3: {
      fontFamily: "Karla",
      fontSize: "1.25rem"
    },
    body1: {
      fontFamily: "Karla",
      fontSize: "1rem"
    },
    body2: {
      fontFamily: "Karla",
      fontSize: "0.8rem"
    },


  }
})

export default function App() {

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {isMobile ? <NavBarMobile /> : <NavBarDesktop position="fixed" />}
        <Routes>
          <Route path="/" element={<Home isMobile={isMobile} />} />
          <Route path="/evently" element={<Evently />} />
          <Route path="/crc" element={<CRC />} />
          <Route path="/algolink" element={<AlgoLink />} />
          <Route path="/about" element={<About />} />
          <Route path="/play" element={<Play />} />
        </Routes>
        <Footer color="black" />
      </BrowserRouter>
    </ThemeProvider>
  );
}

root.render(<App />);