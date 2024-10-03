import Navbar from '@/components/Navbar'
import React, { Suspense } from 'react'
import HolidayYatraDetailDataProvider from './HolidayYatraDataProvider'
import Loader from '@/components/Loader'

const page = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <HolidayYatraDetailDataProvider />
      </Suspense>
    </div>
  )
}

export default page