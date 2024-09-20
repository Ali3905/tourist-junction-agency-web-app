import React from 'react';

// Define the type for amenities
type Amenity = string;

// Define the type for the route object
interface Route {
  vehicle: string;
  agencyName: string;
  departurePlace: string;
  destinationPlace: string;
  primaryDriver: string;
  secondaryDriver?: string;
  cleaner?: string;
  departureTime: string;
  instructions?: string;
  status: 'Active' | 'Inactive'; // Define possible status values
  amenities?: Amenity[];
  arrivalTime?: string;
  pickupPoint: string;
  dropoffPoint: string;
  ticketFare: number;
  officeAddress: string;
  phonepeNumber: string;
  mobileNumbers?: string[];
  doesProvideCorierService: boolean;
  doesBookTrainTickets: boolean;
  doesCarryTwoWheelers: boolean;
  QR?: string; // URL for QR code
  seatingArrangement?: string;
  discount?: number; // Percentage discount
}

// Define the props for the DailyRouteCard component
interface DailyRouteCardProps {
  route: Route;
}

const DailyRouteCard: React.FC<DailyRouteCardProps> = ({ route }) => {
  const {
    vehicle,
    agencyName,
    departurePlace,
    destinationPlace,
    primaryDriver,
    secondaryDriver,
    cleaner,
    departureTime,
    instructions,
    status,
    amenities = [],
    arrivalTime,
    pickupPoint,
    dropoffPoint,
    ticketFare,
    officeAddress,
    phonepeNumber,
    mobileNumbers = [],
    doesProvideCorierService,
    doesBookTrainTickets,
    doesCarryTwoWheelers,
    QR,
    seatingArrangement,
    discount
  } = route;

  return (
    <div className="relative max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg mt-6 transition-shadow duration-300 p-4">
      <h2 className="font-bold text-lg mb-2">Vehicle: {vehicle}</h2>
      <p className="text-gray-600">Agency: {agencyName}</p>
      <p className="text-gray-600">From: {departurePlace}</p>
      <p className="text-gray-600">To: {destinationPlace}</p>
      <p className="text-gray-600">Primary Driver: {primaryDriver}</p>
      {secondaryDriver && <p className="text-gray-600">Secondary Driver: {secondaryDriver}</p>}
      {cleaner && <p className="text-gray-600">Cleaner: {cleaner}</p>}
      <p className="text-gray-600">Departure Time: {departureTime}</p>
      {arrivalTime && <p className="text-gray-600">Arrival Time: {arrivalTime}</p>}
      <p className="text-gray-600">Pickup Point: {pickupPoint}</p>
      <p className="text-gray-600">Dropoff Point: {dropoffPoint}</p>
      <p className="text-gray-600">Fare: ₹{ticketFare}</p>
      {discount && <p className="text-gray-600">Discount: {discount}%</p>}
      <p className="text-gray-600">Office Address: {officeAddress}</p>
      <p className="text-gray-600">PhonePe: {phonepeNumber}</p>
      {mobileNumbers.length > 0 && (
        <p className="text-gray-600">Mobile Numbers: {mobileNumbers.join(', ')}</p>
      )}
      <p className="text-gray-600">Courier Service: {doesProvideCorierService ? 'Yes' : 'No'}</p>
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
      <p className={`text-sm font-semibold mt-2 ${status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
        Status: {status}
      </p>

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
    </div>
  );
};

export default DailyRouteCard;
