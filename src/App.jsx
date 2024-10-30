import "./App.css";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Prologue from "./components/Prologue/Prologue";
import FirstPhoto from "./components/PhotoPages/FirstPhoto/FirstPhoto";
import SecondPhoto from "./components/PhotoPages/SecondPhoto/SecondPhoto";
import ThirdPhoto from "./components/PhotoPages/ThirdPhoto/ThirdPhoto";
import FourthPhoto from "./components/PhotoPages/FourthPhoto/FourthPhoto";
import Epilog from "./components/Epilog/Epilog";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<VideoPlayer />} />
          <Route path="/prologue" element={<Prologue />} />
          <Route path="/firstPhoto" element={<FirstPhoto />} />
          <Route path="/secondPhoto" element={<SecondPhoto />} />
          <Route path="/thirdPhoto" element={<ThirdPhoto />} />
          <Route path="/fourthPhoto" element={<FourthPhoto />} />
          <Route path="/epilog" element={<Epilog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
