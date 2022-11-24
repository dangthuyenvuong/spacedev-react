import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function MainLayout({user, logout}) {
  return (
    <>
        <Header user={user} logout={logout}/>
        <Outlet />
        <Footer />
    </>
  )
}
