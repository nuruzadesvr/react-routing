import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Shop from './pages/Shop'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
function App() {
  
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/shop" element={<Shop />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
