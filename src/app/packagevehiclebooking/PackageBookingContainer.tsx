"use client"
import AddButton from '@/components/AddButton';
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import PackageList from './PackageList';
import { Provider } from 'react-redux';
import store from '../redux/store';

const PackageBookingContainer = ({ data }: { data: Package[] }) => {
    const [filteredData, setFilteredData] = useState(data)
    const router = useRouter()
    const handleSearch = (query: string) => {

        // Normalize the query to lowercase for case-insensitive comparison
        const lowerCaseQuery = query.toLowerCase();

        // Filter the data
        const filtered = data.filter((pkg: Package) => {
            // Normalize the fields to lowercase for comparison
            const agencyMatch = pkg.customerName?.toLowerCase().includes(lowerCaseQuery);
            const vehicleMatch = pkg.vehicle?.number?.toLowerCase().includes(lowerCaseQuery);
            const departureMatch = pkg.departurePlace?.toLowerCase().includes(lowerCaseQuery);
            const destinationMatch = pkg.destinationPlace?.toLowerCase().includes(lowerCaseQuery);

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
            <AddButton buttonText={'Add Package Booking'} onClick={() => router.push("/packagevehiclebooking/create")} />
            <Provider store={store}>
                <PackageList data={filteredData} />
            </Provider>
        </div>
    )
}

export default PackageBookingContainer