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
import Page404 from './pages/404'
import Signin from './pages/signin'
import Signup from './pages/signup'
import ResetPassword from './pages/reset-password'
import Profile from './pages/profile/profile'
import MyCourse from './pages/profile/course'
import Coin from './pages/profile/coin'
import ProfileLayout from './layouts/ProfileLayout'
import MyProject from './pages/profile/project'
import MyPayment from './pages/profile/payment'
import MainLayout from './layouts/MainLayout'
import { PATH } from './config/path'


function App() {


  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={PATH.contact} element={<Contact />} />
        <Route path={PATH.course} element={<Course />} />
        <Route path={PATH.team} element={<Team />} />
        <Route path={PATH.project} element={<Project />} />
        <Route path={PATH.faq} element={<FAQ />} />
        <Route path={PATH.payment} element={<Payment />} />
        <Route path={PATH.coin} element={<Coin />} />
        <Route path={PATH.signin} element={<Signin />} />
        <Route path={PATH.signup} element={<Signup />} />
        <Route path={PATH.resetPassword} element={<ResetPassword />} />
        <Route path={PATH.profile.index} element={<ProfileLayout />}>
          <Route index element={<Profile />} />
          <Route path={PATH.profile.course} element={<MyCourse />} />
          <Route path={PATH.profile.coin} element={<Coin />} />
          <Route path={PATH.profile.project} element={<MyProject />} />
          <Route path={PATH.profile.payment} element={<MyPayment />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Route>
    </Routes>
  )
}

export default App
