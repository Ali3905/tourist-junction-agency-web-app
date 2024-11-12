import React from 'react'
import BusContainer from './BusContainer';
import { fetchData } from '@/utils/api';
import { cookies } from 'next/headers';

const BusDataProvider = async() => {
    const authtoken = cookies().get('authtoken')?.value;
    const data = await fetchData("/vehicle/BUS", authtoken)
    

    if (data.success === false) {
       return <p className='flex items-center justify-center h-[80vh] w-full' >Could Not Fetch the data of buses</p> 
    }
    
    return (
        <BusContainer data={data} />
    )
}

export default BusDataProvider