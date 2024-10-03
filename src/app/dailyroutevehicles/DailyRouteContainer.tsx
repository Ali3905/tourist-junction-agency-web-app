"use client"
import AddButton from '@/components/AddButton';
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import DailyRouteList from './DailyRouteList';

const DailyRouteContainer = ({ data }: { data: DailyRoute[] }) => {
    const [filteredData, setFilteredData] = useState(data)
    const router = useRouter()
    const handleSearch = (query: string) => {
        console.log({ query });

        // Normalize the query to lowercase for case-insensitive comparison
        const lowerCaseQuery = query.toLowerCase();

        // Filter the data
        const filtered = data.filter((route: DailyRoute) => {
            // Normalize the fields to lowercase for comparison
            const agencyMatch = route.agencyName?.toLowerCase().includes(lowerCaseQuery);
            const vehicleMatch = route.vehicle?.number?.toLowerCase().includes(lowerCaseQuery);
            const departureMatch = route.departurePlace?.toLowerCase().includes(lowerCaseQuery);
            const destinationMatch = route.destinationPlace?.toLowerCase().includes(lowerCaseQuery);

            // Return true if any of the fields match the query
            return agencyMatch || vehicleMatch || departureMatch || destinationMatch;
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
            <AddButton buttonText={'Add Daily Route'} onClick={()=>router.push("/dailyroutevehicles/create")} />
            <DailyRouteList data={filteredData} />
        </div>
    )
}

export default DailyRouteContainer