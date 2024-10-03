import { fetchData } from '@/utils/api'
import React from 'react'
import PackageBookingContainer from './PackageBookingContainer'

const PackageBookingDataProvider = async() => {
    let data = await fetchData("/packageBooking")
    

    if (data.success === false) {
       return <p className='flex items-center justify-center h-[80vh] w-full' >Could Not Fetch the data of Daily routes</p> 
    }
    
    return (
        <PackageBookingContainer data={data} />
    )
}

export default PackageBookingDataProvider