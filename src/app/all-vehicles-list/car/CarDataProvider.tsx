import React from 'react'
import { fetchData } from '@/utils/api';
import CarContainer from './CarContainer';

const CarDataProvider = async() => {
    let data = await fetchData("/vehicle/CAR")
    console.log({data});
    

    if (data.success === false) {
       return <p className='flex items-center justify-center h-[80vh] w-full' >Could Not Fetch the data of cars</p> 
    }
    
    return (
        <CarContainer data={data} />
    )
}

export default CarDataProvider