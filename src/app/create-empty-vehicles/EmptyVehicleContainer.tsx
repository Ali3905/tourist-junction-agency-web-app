"use client"
import SearchBar from '@/components/SearchBar'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import EmptyVehiclesList from './EmptyVehiclesList'
import AddButton from '@/components/AddButton'

const EmptyVehicleContainer = ({ data }: { data: EmptyVehicle[] }) => {
    const [filteredData, setFilteredData] = useState(data)
    const router = useRouter()
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
            <AddButton buttonText={'Add Empty Vehicle'} onClick={()=>router.push("/create-empty-vehicles/create")} />
            <EmptyVehiclesList data={filteredData} />
        </div>
    )
}


export default EmptyVehicleContainer