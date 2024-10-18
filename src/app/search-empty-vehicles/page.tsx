import React, { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Loader from '@/components/Loader'
import EmptyVehicleDataProvider from './EmptyVehicleDataProvider'

const page = () => {
  return (
    <div>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <EmptyVehicleDataProvider />
        </Suspense>
    </div>
  )
}

export default page