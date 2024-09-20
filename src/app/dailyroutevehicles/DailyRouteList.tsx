import React from 'react';
import DailyRouteCard from './DailyRouteCard'; // Adjust the import path as necessary
import { DailyRouteData } from '../data';

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
  status: 'Active' | 'Inactive';
  amenities?: string[];
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
  QR?: string;
  seatingArrangement?: string;
  discount?: number;
}

// Define the props for the DailyRouteList component
interface DailyRouteListProps {
  routes: Route[];
}

const DailyRouteList: React.FC<DailyRouteListProps> = ({ routes }) => {
  return (
    <div className="space-y-4">
      {DailyRouteData.map((route, index) => (
        <DailyRouteCard key={index} route={route} />
      ))}
    </div>
  );
};

export default DailyRouteList;
