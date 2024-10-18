"use client"
import SearchBar from '@/components/SearchBar'
import React, { useState } from 'react'
import EmptyVehiclesList from '../create-empty-vehicles/EmptyVehiclesList'
import { Provider } from 'react-redux'
import store from '../redux/store'

const AllEmptyVehicleContainer = ({ data }: { data: EmptyVehicle[] }) => {
    const [filteredData, setFilteredData] = useState(data)
    const handleSearch = (query: string) => {
        console.log({ query });

        // Normalize the query to lowercase for case-insensitive comparison
        const lowerCaseQuery = query.toLowerCase();

        // Filter the data
        const filtered = data.filter((emptyVehicle: EmptyVehicle) => {
            // Normalize the fields to lowercase for comparison
            const destinationMatch = emptyVehicle.destinationPlace?.toLowerCase().includes(lowerCaseQuery);
            const agencyMatch = emptyVehicle.agency.companyName?.toLowerCase().includes(lowerCaseQuery);
            const vehicleMatch = emptyVehicle.vehicle.number?.toLowerCase().includes(lowerCaseQuery);

            // Return true if any of the fields match the query
            return destinationMatch || agencyMatch || vehicleMatch;
        });

        // Update the filtered data
        setFilteredData(filtered);
    };
    return (
        <div className='max-w-[1400px] mx-auto'>
            <div className='flex justify-center py-8'>
                <SearchBar
                    onSearch={handleSearch}
                    placeholderText="Search Tour Name"
                />
            </div>
            <Provider store={store}>
                <EmptyVehiclesList data={filteredData} />
            </Provider>
        </div>
    )
}


export default AllEmptyVehicleContainer