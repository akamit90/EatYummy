import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import OurFood from './components/OurFood'
import AboutUs from './components/AboutUs'
import SignIn from './components/SignIn'
import Home from './components/Home'
function App() {

  const [count, setCount] = useState(0)

  const handleAdd=()=>{
    setCount(count+1)
  }
  return (
    <>
      <BrowserRouter>
        <Header count={count}/>
        <Routes>
          <Route path="/" element={<Home handleAdd={handleAdd}/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/ourfood" element={<OurFood handleAdd={handleAdd}/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
