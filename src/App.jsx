import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
      </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App
