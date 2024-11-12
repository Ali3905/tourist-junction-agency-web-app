import axios from 'axios';
import React from 'react'
import EmployeeContainer from './EmployeeContainer';
import { cookies } from 'next/headers';
import { fetchData } from '@/utils/api';

const EmloyeeDataProvider = async() => {
    const authtoken = cookies().get('authtoken')?.value;
    const data = await fetchData("/employee", authtoken)
    
    if (data.success === false) {
       return <p className='flex items-center justify-center h-[80vh] w-full' >Could Not Fetch the data of Employees</p> 
    }
    return (
        <EmployeeContainer data={data} />
    )
}

export default EmloyeeDataProvider