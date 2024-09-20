// PackageCard.tsx
import React from 'react';
import { Package } from '../types'; // Import the type from the types.ts file

interface PackageCardProps {
  pkg: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  return (
    <div className="max-w-md p-4 bg-white shadow-lg rounded-md border">
      <h2 className="font-bold text-lg mb-2">Package Details</h2>
      <p className="text-gray-600">Vehicle: {pkg.vehicle}</p>
      <p className="text-gray-600">Other Vehicle: {pkg.otherVehicle}</p>
      {pkg.primaryDriver && <p className="text-gray-600">Primary Driver: {pkg.primaryDriver}</p>}
      {pkg.secondaryDriver && <p className="text-gray-600">Secondary Driver: {pkg.secondaryDriver}</p>}
      {pkg.cleaner && <p className="text-gray-600">Cleaner: {pkg.cleaner}</p>}
      <p className="text-gray-600">Customer: {pkg.customerName}</p>
      <p className="text-gray-600">Mobile: {pkg.mobileNumber}</p>
      {pkg.alternateNumber && <p className="text-gray-600">Alternate Number: {pkg.alternateNumber}</p>}
      <p className="text-gray-600">Starting KM: {pkg.kmStarting}</p>
      <p className="text-gray-600">Rate per KM: ₹{pkg.perKmRateInINR}</p>
      <p className="text-gray-600">Advance Amount: ₹{pkg.advanceAmountInINR}</p>
      <p className="text-gray-600">Remaining Amount: ₹{pkg.remainingAmountInINR}</p>
      <p className="text-gray-600">Advance Place: {pkg.advancePlace}</p>
      <p className="text-gray-600">Departure Place: {pkg.departurePlace}</p>
      <p className="text-gray-600">Destination Place: {pkg.destinationPlace}</p>
      <p className="text-gray-600">Departure Time: {pkg.departureTime}</p>
      <p className="text-gray-600">Return Time: {pkg.returnTime}</p>
      {pkg.returnDate && <p className="text-gray-600">Return Date: {pkg.returnDate}</p>}
      {pkg.departureDate && <p className="text-gray-600">Departure Date: {pkg.departureDate}</p>}
      <p className="text-gray-600">Toll Amount: ₹{pkg.tollInINR}</p>
      <p className="text-gray-600">Other State Tax: ₹{pkg.otherStateTaxInINR}</p>
      {pkg.instructions && <p className="text-gray-600">Instructions: {pkg.instructions}</p>}
      {pkg.note && <p className="text-gray-600">Note: {pkg.note}</p>}
      {pkg.pickupPoint && <p className="text-gray-600">Pickup Point: {pkg.pickupPoint}</p>}
      {pkg.beforeJourneyNote && <p className="text-gray-600">Before Journey Note: {pkg.beforeJourneyNote}</p>}
      {pkg.afterJourneyNote && <p className="text-gray-600">After Journey Note: {pkg.afterJourneyNote}</p>}
      {pkg.createdBy && <p className="text-gray-600">Created By: {pkg.createdBy}</p>}
      {pkg.invoiceId && <p className="text-gray-600">Invoice ID: {pkg.invoiceId}</p>}
      <p className="text-gray-600">Status: {pkg.status}</p>
      <p className="text-gray-600">Is Notified: {pkg.isNotified ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default PackageCard;
