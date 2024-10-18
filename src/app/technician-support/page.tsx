import Navbar from '@/components/Navbar'
import React, { Suspense } from 'react'
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