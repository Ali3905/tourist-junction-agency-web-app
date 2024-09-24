import Navbar from '@/components/Navbar'
import React from 'react'
import Services from './Services'
import StickyFooter from '@/components/StickyFooter'

const page = () => {
  return (
    <div className=''>
         <Navbar/>
         <Services/>
         <StickyFooter/>
    </div>
  )
}

export default page
