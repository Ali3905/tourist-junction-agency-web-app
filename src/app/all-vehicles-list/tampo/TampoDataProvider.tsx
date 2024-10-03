import React from 'react'
import TampoContainer from './TampoContainer';
import { fetchData } from '@/utils/api';

const TampoDataProvider = async() => {
    let data = await fetchData("/vehicle/TAMPO")
    

    if (data.success === false) {
       return <p className='flex items-center justify-center h-[80vh] w-full' >Could Not Fetch the data of Tampoes</p> 
    }
    
    return (
        <TampoContainer data={data} />
    )
}

export default TampoDataProvider