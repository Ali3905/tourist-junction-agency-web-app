import React, { Suspense } from 'react'
import DocumentList from './DocumentList'
import { DocumentData } from '../data'
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