import Navbar from '@/components/Navbar'
import React, { Suspense } from 'react'
import TechnicianCard from './TechnicianCard'
import TechnicianList from './TechnicianList'
import TechnicianDataProvider from './TechnicianDataProvider'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Suspense>
          <TechnicianDataProvider />
        </Suspense>
    </div>
  )
}

export default page