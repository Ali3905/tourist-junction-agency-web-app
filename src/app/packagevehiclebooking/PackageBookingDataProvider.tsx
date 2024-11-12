import { fetchData } from '@/utils/api'
import React from 'react'
import PackageBookingContainer from './PackageBookingContainer'
import { cookies } from 'next/headers';

const PackageBookingDataProvider = async() => {
    const authtoken = cookies().get('authtoken')?.value;
    const data = await fetchData("/packageBooking", authtoken)
    

    if (data.success === false) {
       return <p className='flex items-center justify-center h-[80vh] w-full' >Could Not Fetch the data of Daily routes</p> 
    }
    
    return (
        <PackageBookingContainer data={data} />
    )
}

export default PackageBookingDataProvider