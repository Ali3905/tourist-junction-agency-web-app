import React, { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import DocumentsDataProvider from './DocumentsDataProvider'
import Loader from '@/components/Loader'

const page = () => {
  return (
    <div>
       <Navbar />
       <Suspense fallback={<Loader />}>
        <DocumentsDataProvider />
       </Suspense>
    </div>
  )
}

export default page