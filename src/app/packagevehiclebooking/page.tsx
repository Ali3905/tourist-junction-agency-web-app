import React, { Suspense } from 'react'
import PackageList from './PackageList'
import Navbar from '@/components/Navbar'
import Loader from '@/components/Loader'
import PackageBookingDataProvider from './PackageBookingDataProvider'

const page = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <PackageBookingDataProvider />
      </Suspense>
    </div>
  )
}

export default page