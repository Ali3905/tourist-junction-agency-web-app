import React, { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import DailyRouteDataProvider from './DailyRouteDataProvider'
import Loader from '@/components/Loader'

const page = () => {
  return (
    <div>
      <Navbar />

      <Suspense fallback={<Loader />}>
        <DailyRouteDataProvider />
      </Suspense>
    </div>
  )
}

export default page
