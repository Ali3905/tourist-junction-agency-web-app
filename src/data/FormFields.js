//Daily Route 
[ 
    { name: "vehicle", id: "vehicle", type: "text", label: "Vehicle" },
    { name: "agencyName", id: "agencyName", type: "text", label: "Agency Name" },
    { name: "departurePlace", id: "departurePlace", type: "text", label: "Departure Place" },
    { name: "destinationPlace", id: "destinationPlace", type: "text", label: "Destination Place" },
    { name: "primaryDriver", id: "primaryDriver", type: "text", label: "Primary Driver" },
    { name: "secondaryDriver", id: "secondaryDriver", type: "text", label: "Secondary Driver" },
    { name: "cleaner", id: "cleaner", type: "text", label: "Cleaner" },
    { name: "departureTime", id: "departureTime", type: "datetime-local", label: "Departure Time" },
    { name: "instructions", id: "instructions", type: "textarea", label: "Instructions" },
    { name: "status", id: "status", type: "select", label: "Status", options: ["STARTED", "COMPLETED", "FINALIZED"] },
    { name: "amenities", id: "amenities", type: "text", label: "Amenities" },
    { name: "arrivalTime", id: "arrivalTime", type: "datetime-local", label: "Arrival Time" },
    { name: "pickupPoint", id: "pickupPoint", type: "text", label: "Pickup Point" },
    { name: "dropoffPoint", id: "dropoffPoint", type: "text", label: "Dropoff Point" },
    { name: "ticketFare", id: "ticketFare", type: "number", label: "Ticket Fare" },
    { name: "officeAddress", id: "officeAddress", type: "text", label: "Office Address" },
    { name: "phonepeNumber", id: "phonepeNumber", type: "text", label: "PhonePe Number" },
    { name: "mobileNumbers", id: "mobileNumbers", type: "text", label: "Mobile Numbers" },
    { name: "doesProvideCorierService", id: "doesProvideCorierService", type: "checkbox", label: "Provides Courier Service" },
    { name: "doesBookTrainTickets", id: "doesBookTrainTickets", type: "checkbox", label: "Books Train Tickets" },
    { name: "doesCarryTwoWheelers", id: "doesCarryTwoWheelers", type: "checkbox", label: "Carries Two Wheelers" },
    { name: "QR", id: "QR", type: "text", label: "QR Code" },
    { name: "seatingArrangement", id: "seatingArrangement", type: "text", label: "Seating Arrangement" },
    { name: "discount", id: "discount", type: "number", label: "Discount" }
  ];


  //Invoice


  [
    { name: "vehicle", id: "vehicle", type: "text", label: "Vehicle" },
    { name: "otherVehicle", id: "otherVehicle", type: "text", label: "Other Vehicle" },
    { name: "customerName", id: "customerName", type: "text", label: "Customer Name" },
    { name: "mobileNumber", id: "mobileNumber", type: "text", label: "Mobile Number" },
    { name: "alternateNumber", id: "alternateNumber", type: "text", label: "Alternate Number" },
    { name: "kmStarting", id: "kmStarting", type: "text", label: "KM Starting" },
    { name: "perKmRateInINR", id: "perKmRateInINR", type: "number", label: "Per KM Rate (INR)" },
    { name: "advanceAmountInINR", id: "advanceAmountInINR", type: "number", label: "Advance Amount (INR)" },
    { name: "remainingAmountInINR", id: "remainingAmountInINR", type: "number", label: "Remaining Amount (INR)" },
    { name: "advancePlace", id: "advancePlace", type: "text", label: "Advance Place" },
    { name: "departurePlace", id: "departurePlace", type: "text", label: "Departure Place" },
    { name: "destinationPlace", id: "destinationPlace", type: "text", label: "Destination Place" },
    { name: "departureTime", id: "departureTime", type: "datetime-local", label: "Departure Time" },
    { name: "returnTime", id: "returnTime", type: "datetime-local", label: "Return Time" },
    { name: "tollInINR", id: "tollInINR", type: "number", label: "Toll Charges (INR)" },
    { name: "otherStateTaxInINR", id: "otherStateTaxInINR", type: "number", label: "Other State Tax (INR)" },
    { name: "note", id: "note", type: "textarea", label: "Note" },
    { name: "instructions", id: "instructions", type: "textarea", label: "Instructions" },
  ];

  

  //car
  [
    { name: "number", id: "number", type: "text", label: "Vehicle Number" },
    { name: "seatingCapacity", id: "seatingCapacity", type: "number", label: "Seating Capacity" },
    { name: "model", id: "model", type: "text", label: "Model" },
    { name: "location", id: "location", type: "text", label: "Location" },
    { name: "contactNumber", id: "contactNumber", type: "text", label: "Contact Number" },
    { name: "photos", id: "photos", type: "file", label: "Photos", isMultiple: true },
    { name: "isAC", id: "isAC", type: "checkbox", label: "Is AC" },
    { name: "forRentOrSell", id: "forRentOrSell", type: "checkbox", label: "For Rent or Sell" },
  
    
  ]
  
  //bus

  [
    { name: "number", id: "number", type: "text", label: "Vehicle Number" },
    { name: "seatingCapacity", id: "seatingCapacity", type: "number", label: "Seating Capacity" },
    { name: "model", id: "model", type: "text", label: "Model" },
    { name: "bodyType", id: "bodyType", type: "text", label: "Body Type" },
    { name: "chassisBrand", id: "chassisBrand", type: "text", label: "Chassis Brand" },
    { name: "location", id: "location", type: "text", label: "Location" },
    { name: "contactNumber", id: "contactNumber", type: "text", label: "Contact Number" },
    { name: "photos", id: "photos", type: "file", label: "Photos", isMultiple: true },
    { name: "isAC", id: "isAC", type: "checkbox", label: "Is AC" },
    { name: "forRentOrSell", id: "forRentOrSell", type: "text", label: "For Rent or Sell" },
    { name: "type", id: "type", type: "text", label: "Body Type" },
    { name: "isSeatPushBack", id: "isSeatPushBack", type: "checkbox", label: "Is Seat Push Back" },
    { name: "isLuggageSpace", id: "isLuggageSpace", type: "checkbox", label: "Is Luggage Space Available" },
    { name: "isSleeper", id: "isSleeper", type: "checkbox", label: "Is Sleeper" },
    { name: "curtain", id: "curtain", type: "checkbox", label: "Curtain Available" },
    { name: "amenities", id: "amenities", type: "checkbox", label: "Amenities", isMultiple: true }
  ]

  //truck

  [
    { name: "number", id: "number", type: "text", label: "Vehicle Number" },
    { name: "model", id: "model", type: "text", label: "Model" },
    { name: "bodyType", id: "bodyType", type: "text", label: "Body Type" },
    { name: "chassisBrand", id: "chassisBrand", type: "text", label: "Chassis Brand" },
    { name: "location", id: "location", type: "text", label: "Location" },
    { name: "contactNumber", id: "contactNumber", type: "text", label: "Contact Number" },
    { name: "photos", id: "photos", type: "file", label: "Photos", isMultiple: true },
    { name: "noOfTyres", id: "noOfTyres", type: "number", label: "Number of Tyres" },
    { name: "vehicleWeightInKGS", id: "vehicleWeightInKGS", type: "number", label: "Vehicle Weight (KGS)" },
    { name: "forRentOrSell", id: "forRentOrSell", type: "checkbox", label: "For Rent or Sell" }
  ]


  //tempo

  [
    { name: "number", id: "number", type: "text", label: "Vehicle Number" },
    { name: "seatingCapacity", id: "seatingCapacity", type: "number", label: "Seating Capacity" },
    { name: "model", id: "model", type: "text", label: "Model" },
    { name: "location", id: "location", type: "text", label: "Location" },
    { name: "contactNumber", id: "contactNumber", type: "text", label: "Contact Number" },
    { name: "photos", id: "photos", type: "file", label: "Photos", isMultiple: true },
    { name: "forRentOrSell", id: "forRentOrSell", type: "checkbox", label: "For Rent or Sell" }
  ]



  //driver
  [
    { name: "name", id: "name", type: "text", label: "Driver Name" },
    { name: "password", id: "password", type: "text", label: "Enter Password" },
    { name: "mobileNumber", id: "mobileNumber", type: "text", label: "Mobile Number" },
    { name: "city", id: "city", type: "text", label: "City" },
    { name: "state", id: "state", type: "text", label: "State" },
    { name: "vehicleType", id: "vehicleType", type: "text", label: "Vehicle Type" },
    { name: "photo", id: "photo", type: "file", label: "Photo" },
    { name: "aadharCard", id: "aadharCard", type: "file", label: "Aadhar Card" },
    { name: "license", id: "license", type: "file", label: "License" }
  ]

  //vehicle servicing history

  [
    { name: "vehicleNumber", id: "vehicleNumber", type: "text", label: "Vehicle Number", required: true, unique: true },
    { name: "garageName", id: "garageName", type: "text", label: "Garage Name", required: true },
    { name: "garageNumber", id: "garageNumber", type: "text", label: "Garage Number", required: true },
    { name: "date", id: "date", type: "date", label: "Date", required: true },
    { name: "workDescription", id: "workDescription", type: "text", lcabel: "Work Description" },
    { name: "bill", id: "bill", type: "text", label: "Bill Number", required: true, unique: true }
  ]


  //employee deatils

  [
    { name: "name", id: "name", type: "text", label: "Name", required: true },
    { name: "password", id: "password", type: "password", label: "Password", required: true },
    { name: "mobileNumber", id: "mobileNumber", type: "text", label: "Mobile Number", required: true },
    { name: "employeeType", id: "employeeType", type: "select", label: "Employee Type", options: ["MANAGER", "CLEANER", "OFFICE-BOY", "ACCOUNTANT", "TELECALLER"] },
    { name: "state", id: "state", type: "text", label: "State", required: true },
    { name: "city", id: "city", type: "text", label: "City" },
    { name: "aadharCard", id: "aadharCard", type: "text", label: "Aadhar Card" },
    { name: "photo", id: "photo", type: "file", label: "Photo" }
  ];


  //add driver

  [
    { name: "name", id: "name", type: "text", label: "Name", required: true },
    { name: "password", id: "password", type: "password", label: "Password", required: true },
    { name: "vehicleType", id: "vehicleType", type: "select", label: "Vehicle Type", options: ["ALL", "CAR", "BUS", "TRUCK", "TAMPO"] },
    { name: "mobileNumber", id: "mobileNumber", type: "text", label: "Mobile Number", required: true },
    { name: "city", id: "city", type: "text", label: "City", required: true },
    { name: "state", id: "state", type: "text", label: "State" },
    { name: "aadharCard", id: "aadharCard", type: "file", label: "Aadhar Card" },
    { name: "license", id: "license", type: "file", label: "License" },
    { name: "photo", id: "photo", type: "file", label: "Photo" }
  ];


  //cleaner

  [
    { name: "name", id: "name", type: "text", label: "Name", required: true },
    { name: "mobileNumber", id: "mobileNumber", type: "text", label: "Mobile Number", required: true },
    { name: "password", id: "password", type: "password", label: "Password", required: true },
    { name: "city", id: "city", type: "text", label: "City", required: true },
    { name: "state", id: "state", type: "text", label: "State" },
    { name: "aadharCard", id: "aadharCard", type: "file", label: "Aadhar Card" },
    { name: "photo", id: "photo", type: "file", label: "Photo" }
  ];


  //documents
  [
    { name: "vehicleNumber", id: "vehicleNumber", type: "text", label: "Vehicle Number", required: true },
    { name: "RC", id: "RC", type: "file", label: "RC", required: true },
    { name: "Insurance", id: "Insurance", type: "file", label: "Insurance", required: true },
    { name: "Permit", id: "Permit", type: "file", label: "Permit", required: true },
    { name: "Fitness", id: "Fitness", type: "file", label: "Fitness", required: true },
    { name: "Tax", id: "Tax", type: "file", label: "Tax", required: true },
    { name: "Puc", id: "Puc", type: "file", label: "PUC", required: true }
  ];

//empty vehicle

[
    { name: "vehicle", id: "vehicle", type: "select", label: "Vehicle", ref: "vehicle" }, 
    { name: "moreInformation", id: "moreInformation", type: "textarea", label: "More Information" },
    { name: "departurePlace", id: "departurePlace", type: "text", label: "Departure Place" },
    { name: "destinationPlace", id: "destinationPlace", type: "text", label: "Destination Place" },
    { name: "departureTime", id: "departureTime", type: "datetime-local", label: "Departure Time" },
    { name: "departureDate", id: "departureDate", type: "date", label: "Departure Date" },
    { name: "mobileNumber", id: "mobileNumber", type: "tel", label: "Mobile Number" },
    { name: "agency", id: "agency", type: "select", label: "Agency", ref: "user" }, 
    { name: "photos", id: "photos", type: "file", label: "Photos", isMultiple: true }
  ];

  
  //package


  [
    { name: "vehicle", id: "vehicle", type: "select", label: "Vehicle", ref: "vehicle", required: true },
    { name: "otherVehicle", id: "otherVehicle", type: "select", label: "Other Vehicle", ref: "vehicle", required: true },
    { name: "primaryDriver", id: "primaryDriver", type: "select", label: "Primary Driver", ref: "driver" },
    { name: "secondaryDriver", id: "secondaryDriver", type: "select", label: "Secondary Driver", ref: "driver" },
    { name: "cleaner", id: "cleaner", type: "select", label: "Cleaner", ref: "cleaner" },
    { name: "customerName", id: "customerName", type: "text", label: "Customer Name", required: true },
    { name: "mobileNumber", id: "mobileNumber", type: "tel", label: "Mobile Number", required: true },
    { name: "alternateNumber", id: "alternateNumber", type: "tel", label: "Alternate Number", required: true },
    { name: "kmStarting", id: "kmStarting", type: "text", label: "Starting KM", required: true },
    { name: "perKmRateInINR", id: "perKmRateInINR", type: "number", label: "Rate per KM (INR)", required: true },
    { name: "advanceAmountInINR", id: "advanceAmountInINR", type: "number", label: "Advance Amount (INR)", required: true },
    { name: "remainingAmountInINR", id: "remainingAmountInINR", type: "number", label: "Remaining Amount (INR)", required: true },
    { name: "advancePlace", id: "advancePlace", type: "text", label: "Advance Place", required: true },
    { name: "departurePlace", id: "departurePlace", type: "text", label: "Departure Place", required: true },
    { name: "destinationPlace", id: "destinationPlace", type: "text", label: "Destination Place", required: true },
    { name: "departureTime", id: "departureTime", type: "datetime-local", label: "Departure Time", required: true },
    { name: "returnTime", id: "returnTime", type: "datetime-local", label: "Return Time", required: true },
    { name: "returnDate", id: "returnDate", type: "date", label: "Return Date" },
    { name: "departureDate", id: "departureDate", type: "date", label: "Departure Date" },
    { name: "tollInINR", id: "tollInINR", type: "number", label: "Toll Amount (INR)", required: true },
    { name: "otherStateTaxInINR", id: "otherStateTaxInINR", type: "number", label: "Other State Tax (INR)", required: true },
    { name: "instructions", id: "instructions", type: "textarea", label: "Instructions" },
    { name: "note", id: "note", type: "textarea", label: "Note" },
    { name: "pickupPoint", id: "pickupPoint", type: "text", label: "Pickup Point" },
    { name: "beforeJourneyPhotos", id: "beforeJourneyPhotos", type: "file", label: "Before Journey Photos", isMultiple: true },
    { name: "beforeJourneyNote", id: "beforeJourneyNote", type: "textarea", label: "Before Journey Note" },
    { name: "afterJourneyPhotos", id: "afterJourneyPhotos", type: "file", label: "After Journey Photos", isMultiple: true },
    { name: "afterJourneyNote", id: "afterJourneyNote", type: "textarea", label: "After Journey Note" },
    { name: "createdBy", id: "createdBy", type: "text", label: "Created By" },
    { name: "invoiceId", id: "invoiceId", type: "text", label: "Invoice ID" },
    { name: "status", id: "status", type: "select", label: "Status", options: ["CREATED", "FINALIZED", "STARTED", "COMPLETED"] },
    { name: "isNotified", id: "isNotified", type: "checkbox", label: "Is Notified" }
  ];
