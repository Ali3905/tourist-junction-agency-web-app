// types.ts
export interface Package {
    vehicle: string;
    otherVehicle: string;
    primaryDriver?: string;
    secondaryDriver?: string;
    cleaner?: string;
    customerName: string;
    mobileNumber: string;
    alternateNumber?: string;
    kmStarting: string;
    perKmRateInINR: number;
    advanceAmountInINR: number;
    remainingAmountInINR: number;
    advancePlace: string;
    departurePlace: string;
    destinationPlace: string;
    departureTime: string;
    returnTime: string;
    returnDate?: string;
    departureDate?: string;
    tollInINR: number;
    otherStateTaxInINR: number;
    instructions?: string;
    note?: string;
    pickupPoint?: string;
    beforeJourneyNote?: string;
    afterJourneyNote?: string;
    createdBy?: string;
    invoiceId?: string;
    status: 'CREATED' | 'FINALIZED' | 'STARTED' | 'COMPLETED';
    isNotified: boolean;
  }




  export interface Point {
    name: string;
    vehicleId: string;
    departurePlace: string;
    destinationPlace: string;
    returnDate: string; // Using string for dates (ISO format), you can also use Date if you're parsing it
    beforeJourneyNote: string;
    afterJourneyNote: string;
    beforeJourneyPhotos: string[]; // Array of URLs (strings) for the photos
    afterJourneyPhotos: string[];  // Array of URLs (strings) for the photos
  }
  
  