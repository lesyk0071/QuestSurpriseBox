import './App.css'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import Prologue from './components/Prologue/Prologue'
import PhotoSlider from './components/PhotoSlider'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
        <div>
          <Routes>
            <Route path='/' element={<VideoPlayer />}/>
            <Route path='/prologue' element={<Prologue />}/>
            <Route path='/photoSlider' element={<PhotoSlider />}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App
