"use client"
import React, { useState } from 'react'
import DriverList from '@/components/DriverList'
import SearchBar from '@/components/SearchBar'
import { Provider } from 'react-redux'
import store from '../redux/store'

const DriversContainer = ({ data }: { data: Driver[] }) => {
    const [filteredData, setFilteredData] = useState(data)
    const handleSearch = (query: string) => {   
        // Normalize the query to lowercase for case-insensitive comparison
        const lowerCaseQuery = query.toLowerCase();

        // Filter the data
        const filtered = data.filter((driver: Driver) => {
            // Normalize the fields to lowercase for comparison
            const nameMatch = driver.name?.toLowerCase().includes(lowerCaseQuery);
            const vehicleTypeMatch = driver.vehicleType?.toLowerCase().includes(lowerCaseQuery);
            const cityMatch = driver.city?.toLowerCase().includes(lowerCaseQuery);

            // Return true if any of the fields match the query
            return nameMatch || vehicleTypeMatch || cityMatch;
        });

        // Update the filtered data
        setFilteredData(filtered);
    };
    return (
        <div className='max-w-[1400px] mx-auto'>
            <div className='flex justify-center py-8'>
                <SearchBar
                    onSearch={handleSearch}
                    placeholderText="Search Location"
                />
            </div>
            <Provider store={store}>
            <DriverList data={filteredData} />
            </Provider>
        </div>
    )
}

export default DriversContainer