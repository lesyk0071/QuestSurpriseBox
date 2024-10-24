import './App.css'
import VideoPlayer from './components/VideoPlayer'
import PhotoSlider from './components/PhotoSlider'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
        <div>
          <Routes>
            <Route path='/' element={<VideoPlayer/>}/>
            <Route path='/photoSlider' element={<PhotoSlider/>}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App
