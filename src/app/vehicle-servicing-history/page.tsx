import React, { Suspense } from 'react'
import ServiceList from './ServiceContainer'
import ServiceDataProvider from './ServiceDataProvider'
import Loader from '@/components/Loader'

const page = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <ServiceDataProvider />
      </Suspense>
    </div>
  )
}

export default page