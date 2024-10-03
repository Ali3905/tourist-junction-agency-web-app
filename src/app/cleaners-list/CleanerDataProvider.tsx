import React from 'react'
import axios from 'axios';
import CleanerContainer from './CleanerContainer';

const CleanerDataProvider = async() => {
    let data;
    try {
        const res = await axios({
            method: "get",
            baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
            url: "/cleaner",
            headers: {
                authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN
            }
        })
        data = res.data.data
    } catch (error) {
        return <p className='flex items-center justify-center h-[80vh] w-full'>Could not fetch the cleaners data</p>
    }
    return (
        <CleanerContainer data={data} />
    )
}

export default CleanerDataProvider