import React, { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Loader from '@/components/Loader'
import TruckDataProvider from './TruckDataProvider'

const page = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <TruckDataProvider />
      </Suspense>
    </div>
  )
}

export default page