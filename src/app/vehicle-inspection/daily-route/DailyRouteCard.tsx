
import React from 'react';
import { DailyRouteCardProps } from '../../types';

const DailyRouteCard: React.FC<DailyRouteCardProps> = ({ point }) => {
  if (!point) {
    return <div>No data available</div>;
  }

  const {
    name,
    vehicleId,
    departurePlace,
    destinationPlace,
    returnDate,
    beforeJourneyNote,
    afterJourneyNote,
    beforeJourneyPhotos,
    afterJourneyPhotos,
  } = point;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Vehicle ID: {vehicleId}</p>
      <p>Departure: {departurePlace}</p>
      <p>Destination: {destinationPlace}</p>
      <p>Return Date: {returnDate}</p>
      <p>Before Journey Note: {beforeJourneyNote}</p>
      <p>After Journey Note: {afterJourneyNote}</p>
      <div>
        <p>Before Journey Photos:</p>
        {beforeJourneyPhotos?.map((photo, index) => (
          <img key={index} src={photo} alt={`Before journey ${index}`} className="w-16 h-16"/>
        ))}
      </div>
      <div>
        <p>After Journey Photos:</p>
        {afterJourneyPhotos?.map((photo, index) => (
          <img key={index} src={photo} alt={`After journey ${index}`} className="w-16 h-16"/>
        ))}
      </div>
    </div>
  );
};

export default DailyRouteCard;
