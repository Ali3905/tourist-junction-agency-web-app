// types.ts
interface Package {
  _id: string;
  vehicle: Vehicle;
  otherVehicle: Vehicle;
  primaryDriver?: Driver;
  secondaryDriver?: Driver;
  cleaner?: Cleaner;
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

type DailyRoute = {
  _id: string;
  vehicle: Vehicle;
  agencyName?: string;
  officeAddress?: string;
  discount?: number;
  departurePlace?: string;
  destinationPlace?: string;
  departureTime?: Date;
  arrivalTime?: Date;
  pickupPoint?: string;
  dropoffPoint?: string;
  mobileNumbers?: string[];
  ticketFare: number;
  amenities?: string[];
  doesProvideCourierService?: boolean;
  doesBookTrainTickets?: boolean;
  doesCarryTwoWheelers?: boolean;
  phonepeName?: string;
  phonepeNumber?: string;
  QR?: string;
  seatingArrangement?: string;
  status: "CREATED" | "FINALIZED" | "STARTED" | "COMPLETED";
  
  primaryDriver: Driver;
  secondaryDriver?: Driver;
  cleaner?: Cleaner;

  instructions?: string;
}


interface Point {
  name: string;
  vehicleId: string;
  departurePlace: string;
  destinationPlace: string;
  returnDate: string; // Using string for dates (ISO format) | you can also use Date if you're parsing it
  beforeJourneyNote: string;
  afterJourneyNote: string;
  beforeJourneyPhotos: string[]; // Array of URLs (strings) for the photos
  afterJourneyPhotos: string[];  // Array of URLs (strings) for the photos
}

type Tour = {
  _id: string,
  name: string | undefined,
  location: string | undefined,
  officeAddress: string | undefined,
  primaryMobileNumber: string | undefined,
  secondaryMobileNumber: string | undefined,
  photos: string[]
}

type Cleaner = {
  _id: string;
  name: string;
  mobileNumber: string;
  password: string;
  city: string;
  state: string;
  cleanerType: string;
  photo: string;
  aadharCard: string;
}

type Driver = {
  _id: string;
  name: string;
  mobileNumber: string;
  password: string;
  city: string;
  state: string;
  vehicleType: string;
  photo: string;
  aadharCard: string;
  license: string;
}

type Vehicle = {
  _id: string;
  number: string;
  seatingCapacity: number;
  model: string;
  bodyType: string;
  chassisBrand: string;
  location: string;
  contactNumber: string;
  photos: string[];
  isAC: boolean;
  isForRent: boolean;
  isForSell: boolean;
  type: "BUS" | "CAR" | "TAMPO" | "TRUCK";
  noOfTyres?: number;
  vehicleWeightInKGS: number;
  chassisNumber?: string;
  amenities: string[];
  [key: string]: string | undefined;
}

type VehicleService = {
  _id: string,
  vehicle: Vehicle,
  garageName: string,
  garageNumber: string,
  date: Date,
  workDescription: string,
  bill: string[],
}

type Employee = {
  _id: string,
  name: string,
  mobileNumber: string,
  password: string,
  employeeType: "MANAGER" | "CLEANER" | "OFFICE-BOY" | "ACCOUNTANT" | "TELECALLER",
  state: string,
  city?: string,
  photo: string,
  aadharCard: string,
}

type EmptyVehicle = {
  _id: string;
  vehicle: Vehicle;
  moreInformation: string;
  departurePlace: string;
  destinationPlace: string;
  departureTime: Date;
  departureDate: Date;
  mobileNumber: string;
  agency: User;
  photos: string[];
}


type User = {
  _id: string;
  userName: string;
  companyName: string;
  mobileNumber: string;
  whatsappNumber: string;
  state: string;
  city: string;
  email: string;
  password: string;
  type: "AGENCY" | "CUSTOMER" | "ADMIN";
  drivers: Driver[];
  employees: Employee[];
  technicians: Technician[];
  cleaners: Cleaner[];
  vehicles: Vehicle[];
  dailyRoutes: string[];
  isSubsciptionValid: boolean;
  trialValidTill: Date;
  subscription: string;
  createdAt: string;
  updatedAt: string;
}


type Technician = {
  _id: string,
  name: string,
  mobileNumber: string,
  alternateNumber: string,
  vehicleType: "BUS" | "CAR" | "TAMPO" | "TRUCK" | "ALL",
  state: string,
  city: string,
  technicianType: "MECHANIC" | "ELECTICIAN" | "SPAREPARTSHOP" | "SPRINGWORK" | "BATTERYSERVICES" | "VEHICLEBODYREPAIR" | "CRANESERVICES",
}
