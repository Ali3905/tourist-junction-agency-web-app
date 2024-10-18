import Navbar from '@/components/Navbar'
import React, { Suspense } from 'react'
import Loader from '@/components/Loader'
import CarDataProvider from './CarDataProvider'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Suspense fallback={<Loader />}>
          <CarDataProvider />
        </Suspense>
    </div>
  )
}

export default page