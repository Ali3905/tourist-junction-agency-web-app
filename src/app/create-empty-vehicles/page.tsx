import React, { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import EmptyVehicleDataProvider from './EmptyVehicleDataProvider'
import Loader from '@/components/Loader'

const page = () => {
  return (
    <div>
         <Navbar/>
        <Suspense fallback={<Loader />}>
          <EmptyVehicleDataProvider />
        </Suspense>
    </div>
  )
}

export default page
