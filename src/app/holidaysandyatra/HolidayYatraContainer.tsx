"use client"
import AddButton from '@/components/AddButton'
import SearchBar from '@/components/SearchBar'
import React, { useState } from 'react'
import HolidayYatraList from './HolidayYatraList'
import { useRouter } from 'next/navigation'

const HolidayYatraContainer = ({ data }: { data: Tour[] }) => {
    const [filteredData, setFilteredData] = useState<Tour[]>(data)
    const router = useRouter()
    const handleSearch = (query: string) => {
        console.log({query});
        
        // Normalize the query to lowercase for case-insensitive comparison
        const lowerCaseQuery = query.toLowerCase();
    
        // Filter the data
        const filtered = data.filter((tour: Tour) => {
            // Normalize the fields to lowercase for comparison
            const nameMatch = tour.name?.toLowerCase().includes(lowerCaseQuery);
            const locationMatch = tour.location?.toLowerCase().includes(lowerCaseQuery);
            const officeAddressMatch = tour.officeAddress?.toLowerCase().includes(lowerCaseQuery);
    
            // Return true if any of the fields match the query
            return nameMatch || locationMatch || officeAddressMatch;
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
            <div>
                <AddButton buttonText={'Add Holiday & Yatra'} onClick={()=>router.push("/holidaysandyatra/create")} />
                <HolidayYatraList data={filteredData} />
            </div>
        </div>
    )
}

export default HolidayYatraContainer