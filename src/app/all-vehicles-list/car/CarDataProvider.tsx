import React from 'react'
import { fetchData } from '@/utils/api';
import CarContainer from './CarContainer';
import { cookies } from 'next/headers';

const CarDataProvider = async() => {
    const authtoken = cookies().get('authtoken')?.value;
    const data = await fetchData("/vehicle/CAR", authtoken)
    

    if (data.success === false) {
       return <p className='flex items-center justify-center h-[80vh] w-full' >Could Not Fetch the data of cars</p> 
    }
    
    return (
        <CarContainer data={data} />
    )
}

export default CarDataProvider