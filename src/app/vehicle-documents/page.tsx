import React from 'react'
import DocumentList from './DocumentList'
import { DocumentData } from '../data'

const page = () => {
  return (
    <div>
       <DocumentList documents={DocumentData} />
    </div>
  )
}

export default page