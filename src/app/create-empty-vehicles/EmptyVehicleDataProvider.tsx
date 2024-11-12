import axios from 'axios';
import React from 'react'
import EmptyVehicleContainer from './EmptyVehicleContainer';
import { cookies } from 'next/headers';
import { fetchData } from '@/utils/api';

const EmptyVehicleDataProvider = async() => {
    const authtoken = cookies().get('authtoken')?.value;
    const data = await fetchData("/emptyVehicle", authtoken)
    
    if (data.success === false) {
       return <p className='flex items-center justify-center h-[80vh] w-full' >Could Not Fetch the data of Empty Vehicles</p> 
    }
    return (
        <EmptyVehicleContainer data={data} />
    )
}

export default EmptyVehicleDataProvider