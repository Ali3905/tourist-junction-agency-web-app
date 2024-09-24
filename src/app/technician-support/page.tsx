import Navbar from '@/components/Navbar'
import React from 'react'
import TechnicianCard from './TechnicianCard'
import TechnicianList from './TechnicianList'

const page = () => {
  return (
    <div>
        <Navbar/>
        <TechnicianList/>
    </div>
  )
}

export default page