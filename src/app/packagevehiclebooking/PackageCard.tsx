// PackageCard.tsx
import AddButton from '@/components/AddButton';
import DeleteButton from '@/components/DeleteButton';
import { Form } from '@/components/Form';
import Modal from '@/components/Modal';
import UpdateButton from '@/components/UpdateButton';
import { getCleanerIdrDropdownOptions, getDriverIdrDropdownOptions } from '@/utils/getDropdownOptions';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface PackageCardProps {
  pkg: Package,
  onDelete?: (id: string) => void,
  onUpdate?: (id: string) => void,
}


const PackageCard: React.FC<PackageCardProps> = ({ pkg, onDelete, onUpdate }) => {
  const [isFInalizeModalOpen, setIsFinalizeModalOpen] = useState(false)
  const [driverOptions, setDriverOptions] = useState([])
  const [cleanerOptions, setCleanerOptions] = useState([])

  const getOptions = async () => {
    setDriverOptions(await getDriverIdrDropdownOptions())
    setCleanerOptions(await getCleanerIdrDropdownOptions())
  }

  const handleModalClose = () => {
    setIsFinalizeModalOpen(false)
  }
  const AddDriverFormFields = [
    { name: "primaryDriverId", id: "primaryDriverId", label: "Primary Driver", type: "select", options: driverOptions, validation: { required: "Primary driver is required" } },
    { name: "secondaryDriverId", id: "secondaryDriverId", label: "Secondary Driver", type: "select", options: driverOptions, },
    { name: "cleanerId", id: "cleanerId", label: "Cleaner", type: "select", options: cleanerOptions, },
    { name: "instuctions", id: "instuctions", label: "Instructions", type: "text" },
  ]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFinalizePackage = async (data: any, reset: () => void) => {
    try {
      await axios({
        method: "patch",
        baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
        url: `/packageBooking/finalize?bookingId=${pkg._id}`,
        data,
        headers: {
          authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN
        }
      })
      // return res.data.success
      alert("Package Booking Finalized")
      reset()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(error?.response?.data?.message || error.message)
    }
  }

  useEffect(() => {
    getOptions()
  }, [])
  return (
    <div className="max-w-md p-4 bg-white shadow-lg rounded-md border relative">
      <div className="absolute top-2 right-2 space-x-2">
        <UpdateButton onUpdate={onUpdate} />
        <DeleteButton onDelete={onDelete} />
      </div>
      <h2 className="font-bold text-lg mb-2">Package Details</h2>
      <p className="text-gray-600">Vehicle: {pkg.vehicle.number}</p>
      <p className="text-gray-600">Other Vehicle: {pkg.otherVehicle?.number}</p>
      {pkg.primaryDriver && <p className="text-gray-600">Primary Driver: {pkg.primaryDriver.name}</p>}
      {pkg.secondaryDriver && <p className="text-gray-600">Secondary Driver: {pkg.secondaryDriver.name}</p>}
      {pkg.cleaner && <p className="text-gray-600">Cleaner: {pkg.cleaner.name}</p>}
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
      <p className="text-gray-600">Status: {pkg.status}</p>
      {/* {pkg.createdBy && <p className="text-gray-600">Created By: {pkg.createdBy}</p>}
      {pkg.invoiceId && <p className="text-gray-600">Invoice ID: {pkg.invoiceId}</p>}
      <p className="text-gray-600">Is Notified: {pkg.isNotified ? 'Yes' : 'No'}</p> */}
      <div className='flex flex-col gap-2'>
        <AddButton buttonText='Add Driver' onClick={() => setIsFinalizeModalOpen(true)} />
        {/* <AddButton buttonText='Finalize Package' /> */}
      </div>
      <Modal isOpen={isFInalizeModalOpen} onClose={handleModalClose}>
        <Form formFields={AddDriverFormFields} handler={handleFinalizePackage} />
      </Modal>
    </div>
  );
};

export default PackageCard;
