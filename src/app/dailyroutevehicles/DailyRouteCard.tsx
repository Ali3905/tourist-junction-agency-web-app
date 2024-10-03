import AddButton from '@/components/AddButton';
import DeleteButton from '@/components/DeleteButton';
import { Form } from '@/components/Form';
import Modal from '@/components/Modal';
import UpdateButton from '@/components/UpdateButton';
import { getCleanerIdrDropdownOptions, getDriverIdrDropdownOptions } from '@/utils/getDropdownOptions';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// Define the type for amenities
type Amenity = string;


// Define the props for the DailyRouteCard component
interface DailyRouteCardProps {
  data: DailyRoute;
  onDelete?: (id: string) => void;
  onUpdate?: (id: string) => void;
}

const DailyRouteCard: React.FC<DailyRouteCardProps> = ({ data, onDelete, onUpdate }) => {
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

  const { _id, vehicle, agencyName, departurePlace, destinationPlace, primaryDriver, secondaryDriver, cleaner, departureTime, instructions, status, amenities = [], arrivalTime, pickupPoint, dropoffPoint, ticketFare, officeAddress, phonepeNumber, mobileNumbers = [], doesProvideCourierService, doesBookTrainTickets, doesCarryTwoWheelers, QR, seatingArrangement, discount } = data;

  const handleFinalizePackage = async (data: any, reset: () => void) => {
    try {
      const res = await axios({
        method: "patch",
        baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
        url: `/busRoute/finalize?routeId=${_id}`,
        data,
        headers: {
          authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN
        }
      })
      // return res.data.success
      alert("Daily Route Finalized")
      reset()
    } catch (error: any) {
      alert(error?.response?.data?.message || error.message)
    }
  }

  useEffect(() => {
    getOptions()
  }, [])


  return (
    <div className="relative max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg mt-6 transition-shadow duration-300 p-4">
      <div className="absolute top-2 right-2 space-x-2">
        <UpdateButton onUpdate={onUpdate} />
        <DeleteButton onDelete={onDelete} />
      </div>
      <h2 className="font-bold text-lg mb-2">Vehicle: {vehicle?.number}</h2>
      <p className="text-gray-600">Agency: {agencyName}</p>
      <p className="text-gray-600">From: {departurePlace}</p>
      <p className="text-gray-600">To: {destinationPlace}</p>
      <p className="text-gray-600">Primary Driver: {primaryDriver?.name}</p>
      {secondaryDriver && <p className="text-gray-600">Secondary Driver: {secondaryDriver?.name}</p>}
      {cleaner && <p className="text-gray-600">Cleaner: {cleaner?.name}</p>}
      <p className="text-gray-600">Departure Time: {departureTime?.toString()}</p>
      {arrivalTime && <p className="text-gray-600">Arrival Time: {arrivalTime.toString()}</p>}
      <p className="text-gray-600">Pickup Point: {pickupPoint}</p>
      <p className="text-gray-600">Dropoff Point: {dropoffPoint}</p>
      <p className="text-gray-600">Fare: ₹{ticketFare}</p>
      {discount && <p className="text-gray-600">Discount: {discount}%</p>}
      <p className="text-gray-600">Office Address: {officeAddress}</p>
      <p className="text-gray-600">PhonePe: {phonepeNumber}</p>
      {mobileNumbers.length > 0 && (
        <p className="text-gray-600">Mobile Numbers: {mobileNumbers.join(', ')}</p>
      )}
      <p className="text-gray-600">Courier Service: {doesProvideCourierService ? 'Yes' : 'No'}</p>
      <p className="text-gray-600">Book Train Tickets: {doesBookTrainTickets ? 'Yes' : 'No'}</p>
      <p className="text-gray-600">Carry Two-Wheelers: {doesCarryTwoWheelers ? 'Yes' : 'No'}</p>
      {seatingArrangement && <p className="text-gray-600">Seating Arrangement: {seatingArrangement}</p>}

      {/* QR Code View */}
      {QR && (
        <button
          onClick={() => window.open(QR, '_blank')}
          className="text-blue-500 underline mt-2"
        >
          View QR Code
        </button>
      )}

      {/* Instructions */}
      {instructions && <p className="text-gray-600 mt-2">Instructions: {instructions}</p>}

      {/* Status */}
      {/* <p className={`text-sm font-semibold mt-2 ${status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
        Status: {status}
      </p> */}

      {/* Amenities */}
      {amenities.length > 0 && (
        <div className="mt-2">
          <h4 className="font-semibold">Amenities:</h4>
          <ul className="list-disc pl-5 text-gray-600">
            {amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      )}
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

export default DailyRouteCard;
