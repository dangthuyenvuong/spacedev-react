import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function MainLayout() {
  return (
    <>
      <Header />
      <main id="main">
        <Suspense fallback={<div>Page Loading....</div>}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </>
  )
}
