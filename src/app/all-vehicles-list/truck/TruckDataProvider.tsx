import React from 'react'
import { fetchData } from '@/utils/api';
import TruckContainer from './TruckContainer';

const TruckDataProvider = async() => {
    let data = await fetchData("/vehicle/TRUCK")
    console.log({data});
    

    if (data.success === false) {
       return <p className='flex items-center justify-center h-[80vh] w-full' >Could Not Fetch the data of Trucks</p> 
    }
    
    return (
        <TruckContainer data={data} />
    )
}

export default TruckDataProvider