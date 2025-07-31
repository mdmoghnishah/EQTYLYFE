import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Headder from './components/Header'
import Home from './components/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Router>
      <Routes>
        {/* Default route for Home */}
        <Route path="/" element={<Home />} />
        <Route path="/why-eqtylyfe" element={<Headder/>} />
      </Routes>
    </Router>
  )
}

export default App
