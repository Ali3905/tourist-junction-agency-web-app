"use client"
import AddButton from '@/components/AddButton';
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import TruckList from './TruckList';

const TruckContainer = ({data}: {data: Vehicle[]}) => {
    const [filteredData, setFilteredData] = useState(data)
    const router = useRouter()
    const handleSearch = (query: string) => {
        console.log({ query });

        // Normalize the query to lowercase for case-insensitive comparison
        const lowerCaseQuery = query.toLowerCase();

        // Filter the data
        const filtered = data.filter((vehicle: Vehicle) => {
            // Normalize the fields to lowercase for comparison
            const agencyMatch = vehicle.contactNumber.toLowerCase().includes(lowerCaseQuery);
            const vehicleMatch = vehicle.number?.toLowerCase().includes(lowerCaseQuery);

            // Return true if any of the fields match the query
            return agencyMatch || vehicleMatch;
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
            <AddButton buttonText={'Add Truck'} onClick={()=>router.push("/all-vehicles-list/truck/create")} />
            <TruckList data={filteredData} />
        </div>
    )
}

export default TruckContainer