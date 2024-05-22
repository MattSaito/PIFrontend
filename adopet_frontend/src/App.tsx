import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Theme from "./components/styles/Theme";
import About from "./pages/About";
import AnimalList from "./pages/AnimalList";
import AnimalProfile from "./pages/AnimalProfile";
import AnimalRegister from "./pages/AnimalRegister";
import Donation from "./pages/Donation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserRegister from "./pages/UserRegister";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Theme>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/donation" element={<Donation />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/animals" element={<AnimalList />}></Route>
              <Route path="/animalprofile" element={<AnimalProfile />}></Route>
              <Route
                path="/animalregister"
                element={<AnimalRegister />}
              ></Route>
              <Route path="/userregister" element={<UserRegister />}></Route>
              <Route path="/userprofile" element={<UserProfile />}></Route>
            </Routes>
          </Router>
        </div>
      </Theme>
    </LocalizationProvider>
  );
}

export default App;
