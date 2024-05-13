import Home from "./pages/Home";
import Donation from "./pages/Donation";
import About from "./pages/About";
import Login from "./pages/Login";
import RegisterAnimal from "./pages/RegisterAnimal";
import Theme from "./components/styles/Theme";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnimalImageUpload from "./pages/AnimalImageUpload";

function App() {
  return (
    <Theme>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/donation" element={<Donation />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/registeranimal" element={<RegisterAnimal />}></Route>
            <Route path="/uploadanimal" element={<AnimalImageUpload />}></Route>
          </Routes>
        </Router>
      </div>
    </Theme>
  );
}

export default App;
