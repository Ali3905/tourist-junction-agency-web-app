import Navbar from '@/components/Navbar'
import React, { Suspense } from 'react'
import BusDataProvider from './BusDataProvider'
import Loader from '@/components/Loader'

const page = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <BusDataProvider />
      </Suspense>
    </div>
  )
}

export default page