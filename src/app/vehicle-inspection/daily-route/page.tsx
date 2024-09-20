import Navbar from '@/components/Navbar'
import React from 'react'
import DailyRouteList from './DailyRouteList'
import StickyFooter from '@/components/StickyFooter'

const page = () => {
  return (
    <div className='max-w-[1400px]'>
        <Navbar/>
        <DailyRouteList/>
        <StickyFooter/>
    </div>
  )
}

export default page