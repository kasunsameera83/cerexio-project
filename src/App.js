// import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home';
import Login from './pages/Login.js';
import Register from './pages/Register';
import { createTheme, ThemeProvider, colors } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#00cad6",
      contrastText: "#fff"
    },
    text: {
      primary: colors.grey[50]
    }
  },
  typography: {
    fontFamily:'Poppins'
  }
});

function App() {
  return (
    <BrowserRouter>
      {/* <ToastContainer /> */}
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
