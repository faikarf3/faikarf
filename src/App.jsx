import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Navbar from './components/Navbar.jsx';
import Project from './pages/Project.jsx';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/experience/:id" element={<Project />} />
          <Route path="/about" element={<About/>}/>
        </Routes> 
      </Router>
    </>
  )
}

export default App
