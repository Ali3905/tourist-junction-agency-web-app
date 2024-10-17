"use client"
import React, { useState } from 'react'
import SearchBar from '@/components/SearchBar'
import AddButton from '@/components/AddButton'
import CleanerList from './CleanerList'
import { useRouter } from 'next/navigation'
import store from '../redux/store'
import { Provider } from 'react-redux'

const CleanerContainer = ({ data }: { data: Cleaner[] }) => {
  const [filteredData, setFilteredData] = useState<Cleaner[]>(data)
  const router = useRouter()
  const handleSearch = (query: string) => {
    console.log({ query });

    // Normalize the query to lowercase for case-insensitive comparison
    const lowerCaseQuery = query.toLowerCase();

    // Filter the data
    const filtered = data.filter((cleaner: Cleaner) => {
      // Normalize the fields to lowercase for comparison
      const nameMatch = cleaner.name?.toLowerCase().includes(lowerCaseQuery);
      const vehicleTypeMatch = cleaner.mobileNumber?.toLowerCase().includes(lowerCaseQuery);
      const cityMatch = cleaner.city?.toLowerCase().includes(lowerCaseQuery);

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
          placeholderText="Search City"
        />
      </div>
      <AddButton buttonText={'Add Cleaner'} onClick={() => router.push("/cleaners-list/create")} />
      <Provider store={store}>
        <CleanerList data={filteredData} />
      </Provider>
    </div>
  )
}

export default CleanerContainer