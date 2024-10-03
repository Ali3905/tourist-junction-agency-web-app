import React from 'react'
import BusContainer from './BusContainer';
import { fetchData } from '@/utils/api';

const BusDataProvider = async() => {
    let data = await fetchData("/vehicle/BUS")
    console.log({data});
    

    if (data.success === false) {
       return <p className='flex items-center justify-center h-[80vh] w-full' >Could Not Fetch the data of buses</p> 
    }
    
    return (
        <BusContainer data={data} />
    )
}

export default BusDataProvider