import { Route, Routes } from 'react-router-dom'
import './assets/css/taildwin.css'
import { PATH } from './config/path'
import MainLayout from './layouts/MainLayout'
import ProfileLayout from './layouts/ProfileLayout'
import Home from './pages'
import Page404 from './pages/404'
import Contact from './pages/contact'
import Course from './pages/course'
import CourseDetail from './pages/course/[slug]-id[id]'
import FAQ from './pages/faq'
import Payment from './pages/payment'
import Coin from './pages/coin'
import MyCoin from './pages/profile/coin'
import MyCourse from './pages/profile/course'
import MyPayment from './pages/profile/payment'
import Profile from './pages/profile/profile'
import MyProject from './pages/profile/project'
import Project from './pages/project'
import Register from './pages/register/[slug]-id[id]'
import ResetPassword from './pages/reset-password'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Team from './pages/team'


function App() {


  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={PATH.contact} element={<Contact />} />
        <Route path={PATH.course}>
          <Route index element={<Course />} />
          <Route path={PATH.courseDetail} element={<CourseDetail />} />
        </Route>
        <Route path={PATH.team} element={<Team />} />
        <Route path={PATH.courseRegister} element={<Register />} />
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
          <Route path={PATH.profile.coin} element={<MyCoin />} />
          <Route path={PATH.profile.project} element={<MyProject />} />
          <Route path={PATH.profile.payment} element={<MyPayment />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Route>
    </Routes>
  )
}

export default App
