import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { createTheme, ThemeProvider } from '@mui/material/styles';


import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./Home"
import About from "./About"
import Play from "./Play"
import Resume from "./Resume"
import Evently from "./case-studies/Evently"
// ============ end imports ==============

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  typography: {
    accent: {
      fontFamily: "Marcellus, Lunasima",
      fontSize: "30px",
      fontWeight: "normal"
    },
    heading1: {
      fontFamily: "Work Sans, Lunasima",
      fontSize: "26px",
      fontWeight: "normal"
    },
    heading2: {
      fontFamily: "Lunasima",
      fontSize: "24px"
    },
    heading3: {
      fontFamily: "Lunasima",
      fontSize: "20px"
    },
    body1: {
      fontFamily: "Lunasima, sans-serif",
      fontSize: "16px"
    },
    body2: {
      fontFamily: "Lunasima, sans-serif",
      fontSize: "14px"
    },


  },
  palette: {

  }
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar position="fixed" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/evently" element={<Evently />} />
          <Route path="/about" element={<About />} />
          <Route path="/play" element={<Play />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

root.render(<App />);