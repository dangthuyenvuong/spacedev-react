import { Route, Routes } from 'react-router-dom'
import './assets/css/taildwin.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages'
import Contact from './pages/contact'
import Course from './pages/course'
import Team from './pages/team'
import Register from './pages/register'
import Project from './pages/project'
import FAQ from './pages/faq'
import Payment from './pages/payment'
import Coin from './pages/coin'


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/course' element={<Course />} />
        <Route path='/team' element={<Team />} />
        <Route path='/project' element={<Project />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/coin' element={<Coin />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
