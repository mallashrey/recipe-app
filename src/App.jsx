import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home/index';
import Favourites from './pages/favourites/index';
import Details from './pages/details/index';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen p-6  bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App
