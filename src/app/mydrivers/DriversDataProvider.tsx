import React from 'react'
import DriversContainer from './DriversContainer'
import axios from 'axios';
import { cookies } from 'next/headers';
import { fetchData } from '@/utils/api';

const DriversDataProvider = async () => {
    const authtoken = cookies().get('authtoken')?.value;
    const data = await fetchData("/driver", authtoken)
    
    if (data.success === false) {
       return <p className='flex items-center justify-center h-[80vh] w-full' >Could Not Fetch the data of Drivers</p> 
    }

    return (
        <DriversContainer data={data} />
    )
}

export default DriversDataProvider