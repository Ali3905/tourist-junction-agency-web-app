"use client"
import React from 'react'
import { PackageData } from '../data'
import PackageCard from './PackageCard'




const PackageList: React.FC = () => {
    return (
      <div className="space-y-4">
        {PackageData.map((pkg, index) => (
          <PackageCard key={index} pkg={pkg} />
        ))}
      </div>
    );
}

export default PackageList







