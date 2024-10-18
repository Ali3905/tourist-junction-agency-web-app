import { fetchData } from '@/utils/api';
import React from 'react'
import DocumentsContainer from './DocumentsContainer';

const DocumentsDataProvider = async() => {
    const data = await fetchData("/vehicle/BUS")


    if (data.success === false) {
        return <p className='flex items-center justify-center h-[80vh] w-full' >Could Not Fetch the data of Documents</p>
    }

    return (
        <DocumentsContainer data={data} />
    )
}

export default DocumentsDataProvider