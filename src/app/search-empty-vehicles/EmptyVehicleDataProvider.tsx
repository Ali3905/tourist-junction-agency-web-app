import axios from 'axios';
import React from 'react'
import AllEmptyVehicleContainer from './AllEmptyVehicleContainer';

const EmptyVehicleDataProvider = async() => {
    let data;
    try {
        const res = await axios({
            method: "get",
            baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
            url: "/emptyVehicle/all",
            headers: {
                authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN
            }
        })
        data = res.data.data
    } catch (error) {
        return <p className='flex items-center justify-center h-[80vh] w-full'>Could not fetch the drivers data</p>
    } 
    return (
        <AllEmptyVehicleContainer data={data} />
    )
}

export default EmptyVehicleDataProvider