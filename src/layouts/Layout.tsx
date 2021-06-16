import React from 'react'
import { NavBar, Footer } from '../components'

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
       <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;