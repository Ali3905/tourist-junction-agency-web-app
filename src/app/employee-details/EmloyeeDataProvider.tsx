import axios from 'axios';
import React from 'react'
import EmployeeContainer from './EmployeeContainer';

const EmloyeeDataProvider = async() => {
    let data;
    try {
        const res = await axios({
            method: "get",
            baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
            url: "/employee",
            headers: {
                authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN
            }
        })
        data = res.data.data
    } catch (error) {
        return <p className='flex items-center justify-center h-[80vh] w-full'>Could not fetch the employees data</p>
    }
    return (
        <EmployeeContainer data={data} />
    )
}

export default EmloyeeDataProvider