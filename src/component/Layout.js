import React, { Children } from 'react'
import Hader from './layout/Hader'
import Footer from './layout/Footer'

const Layout = ({children}) => {
  return (
    <>
    <Hader/>

    <div>{children}</div>
    <Footer/>
    </>
  )
}

export default Layout