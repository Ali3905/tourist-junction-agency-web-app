import { fetchData } from '@/utils/api'
import React from 'react'
import DailyRouteContainer from './DailyRouteContainer'

const DailyRouteDataProvider = async() => {
    let data = await fetchData("/busRoute")
    

    if (data.success === false) {
       return <p className='flex items-center justify-center h-[80vh] w-full' >Could Not Fetch the data of Daily routes</p> 
    }
    
    return (
        <DailyRouteContainer data={data} />
    )
}

export default DailyRouteDataProvider