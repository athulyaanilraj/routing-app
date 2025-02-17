import arm from './assets/arm.jpg'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Cast from './pages/Cast'
import Rating from './pages/Rating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Movie review app</h1>
      <img width="200px" src={arm} />
      <BrowserRouter>
        <div style={{ backgroundColor: 'grey' }}>
          <nav>
            <ul>
              <li ><Link to='/About' style={{ textDecoration: 'none', color: 'white' }}>About</Link></li>
              <li><Link to='/Cast' style={{ textDecoration: 'none', color: 'white' }}>Castt</Link></li>
              <li><Link to='/Rating' style={{ textDecoration: 'none', color: 'white' }}>Rating</Link></li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/cast" element={<Cast />} />
          <Route path="/rating" element={<Rating />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
