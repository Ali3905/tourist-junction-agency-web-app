import React from 'react'
import axios from 'axios';
import CleanerContainer from './CleanerContainer';
import { cookies } from 'next/headers';
import { fetchData } from '@/utils/api';

const CleanerDataProvider = async() => {
    const authtoken = cookies().get('authtoken')?.value;
    const data = await fetchData("/cleaner", authtoken)
    
    if (data.success === false) {
       return <p className='flex items-center justify-center h-[80vh] w-full' >Could Not Fetch the data of Cleaners</p> 
    }
    return (
        <CleanerContainer data={data} />
    )
}

export default CleanerDataProvider