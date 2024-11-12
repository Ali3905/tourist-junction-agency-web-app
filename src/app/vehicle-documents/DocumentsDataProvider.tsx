import { fetchData } from '@/utils/api';
import React from 'react'
import DocumentsContainer from './DocumentsContainer';
import { cookies } from 'next/headers';

const DocumentsDataProvider = async() => {
    const authtoken = cookies().get('authtoken')?.value;
    const data = await fetchData("/vehicle/BUS", authtoken)


    if (data.success === false) {
        return <p className='flex items-center justify-center h-[80vh] w-full' >Could Not Fetch the data of Documents</p>
    }

    return (
        <DocumentsContainer data={data} />
    )
}

export default DocumentsDataProvider