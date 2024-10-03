"use client"
import AddButton from '@/components/AddButton'
import SearchBar from '@/components/SearchBar'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import TechnicianList from './TechnicianList'

const TechnicianContainer = ({ data }: { data: Technician[] }) => {
    const [filteredData, setFilteredData] = useState<Technician[]>(data)
    const router = useRouter()
    const handleSearch = (query: string) => {

        // Normalize the query to lowercase for case-insensitive comparison
        const lowerCaseQuery = query.toLowerCase();
    
        // Filter the data
        const filtered = data.filter((tour: Technician) => {
            // Normalize the fields to lowercase for comparison
            const nameMatch = tour.name?.toLowerCase().includes(lowerCaseQuery);
            const mobileMatch = tour.mobileNumber?.toLowerCase().includes(lowerCaseQuery);
            const stateMatch = tour.state?.toLowerCase().includes(lowerCaseQuery);
            const cityMatch = tour.city?.toLowerCase().includes(lowerCaseQuery);
    
            // Return true if any of the fields match the query
            return nameMatch || mobileMatch || stateMatch || cityMatch;
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
                <AddButton buttonText={'Add Technician'} onClick={()=>router.push("/technician-support/create")} />
                <TechnicianList data={filteredData} />
            </div>
        </div>
    )
}

export default TechnicianContainer