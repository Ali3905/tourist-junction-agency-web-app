import axios from 'axios';
import React from 'react'
import AllEmptyVehicleContainer from './AllEmptyVehicleContainer';
import { cookies } from 'next/headers';
import { fetchData } from '@/utils/api';

const EmptyVehicleDataProvider = async() => {
    const authtoken = cookies().get('authtoken')?.value;
    const data = await fetchData("/emptyVehicle/all", authtoken)
    
    if (data.success === false) {
       return <p className='flex items-center justify-center h-[80vh] w-full' >Could Not Fetch the data of Empty Vehicles</p> 
    }
    return (
        <AllEmptyVehicleContainer data={data} />
    )
}

export default EmptyVehicleDataProvider