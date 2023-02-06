import React from 'react'
import MyNav from './MyNav'

const Layout = ({children}) => {
  return (
    <div className='container'>
        <MyNav/>

        {
            children
        }

    </div>
  )
}

export default Layout