"use client"
import AddButton from '@/components/AddButton';
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import EmployeeList from './EmployeeList';
import { Provider } from 'react-redux';
import store from '../redux/store';

const EmployeeContainer = ({ data }: { data: Employee[] }) => {
    const [filteredData, setFilteredData] = useState<Employee[]>(data)
    const router = useRouter()
    const handleSearch = (query: string) => {
        console.log({ query });

        // Normalize the query to lowercase for case-insensitive comparison
        const lowerCaseQuery = query.toLowerCase();

        // Filter the data
        const filtered = data.filter((employee: Employee) => {
            // Normalize the fields to lowercase for comparison
            const nameMatch = employee.name?.toLowerCase().includes(lowerCaseQuery);
            const mobileMatch = employee.mobileNumber?.toLowerCase().includes(lowerCaseQuery);
            const cityMatch = employee.city?.toLowerCase().includes(lowerCaseQuery);

            // Return true if any of the fields match the query
            return nameMatch || mobileMatch || cityMatch;
        });

        // Update the filtered data
        setFilteredData(filtered);
    };

    return (
        <div className='max-w-[1400px] mx-auto'>

            <div className='flex justify-center py-8'>
                <SearchBar
                    onSearch={handleSearch}
                    placeholderText="Search City"
                />
            </div>
            <AddButton buttonText={'Add Employee'} onClick={() => router.push("/employee-details/create")} />

            <Provider store={store}>
                <EmployeeList data={filteredData} />
            </Provider>
        </div>
    )
}

export default EmployeeContainer