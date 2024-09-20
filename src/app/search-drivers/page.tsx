"use client"
import React from 'react'
import DriverList from './DriverList'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <div>
         <Navbar/>
        <DriverList/>
    </div>
  )
}

export default page