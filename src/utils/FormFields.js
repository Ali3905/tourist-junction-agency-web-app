export const tourFormFields = [
  { name: "name", id: "name", type: "text", label: "Name of the Tour" },
  { name: "officeAddress", id: "officeAddress", type: "text", label: "Office Address" },
  { name: "location", id: "location", type: "text", label: "Location" },
  { name: "primaryMobileNumber", id: "primaryMobileNumber", type: "number", label: "Primary Mobile Number" },
  { name: "secondaryMobileNumber", id: "secondaryMobileNumber", type: "number", label: "Secondary Mobile Number" },
  { name: "photos", id: "photos", type: "file", label: "Photos", isMultiple: true }
]

// export const vehicleServiceFormFields = [
//   { name: "garageName", id: "garageName", type: "text", label: "Garage Name", validation: { required: "Garage Name is required" } },
//   { name: "garageNumber", id: "garageNumber", type: "text", label: "Garage Number", validation: { required: "Garage Number is required" } },
//   { name: "vehicleNumber", id: "vehicleNumber", type: "select", options: vehicleOptions, label: "Vehicle Number", validation: { required: "Vehicle Number is required" } },
//   { name: "workDescription", id: "workDescription", type: "text", label: "Work Description", validation: { required: "Work description is required" } },
//   { name: "date", id: "date", type: "date", label: "Date", validation: { required: "Date is required" } },
//   { name: "bill", id: "bill", type: "file", label: "Bill", isMultiple: true, validation: { required: { value: true, message: "Bill Photos are required" } } },
// ]

export const employeeFormFields = [
  { name: "name", id: "name", type: "text", label: "Name", validation: { required: { value: true, message: "Name is required" } } },
  { name: "password", id: "password", type: "password", label: "Password",  validation: { required: { value: true, message: "Password is required" }, minLength: { value: 5, message: "Password must be atleast 5 characters" } } },
  { name: "mobileNumber", id: "mobileNumber", type: "number", label: "Mobile Number", validation: {
      required: { value: true, message: "Your mobile number is required" },
      minLength: { value: 10, message: "Mobile number must contain at least 10 digits" },
      maxLength: { value: 10, message: "Mobile number can only contain upto 12 digits" }
  } },
  { name: "employeeType", id: "employeeType", type: "select", label: "Employee Type", options: [
      { label: "Select Employee Type", value: "" },
      { label: "Manager", value: "MANAGER" },
      { label: "Cleaner", value: "CLEANER" },
      { label: "Office Boy", value: "OFFICE-BOY" },
      { label: "Accountant", value: "ACCOUNTANT" },
      { label: "Telecaller", value: "TELECALLER" }
    ], validation: { required: { value: true, message: "Employee type is required" } } },
  { name: "state", id: "state", type: "text", label: "State", required: true, validation: { required: { value: true, message: "State is required" } } },
  { name: "city", id: "city", type: "text", label: "City", validation: { required: { value: true, message: "City is required" } } },
  { name: "aadharCard", id: "aadharCard", type: "file", label: "Aadhar Card", validation: { required: { value: true, message: "Aadhar card is required" } } },
  { name: "photo", id: "photo", type: "file", label: "Photo", validation: { required: { value: true, message: "Photo is required" } } }
];

export const driverFormFields = [
  { name: "name", id: "name", type: "text", label: "Name of the Driver" },
  { name: "password", id: "password", type: "password", label: "Password", validation: { required: { value: true, message: "Password is required" }, minLength: { value: 5, message: "Password must be atleast 5 characters" } } },
  {
    name: "mobileNumber", id: "mobileNumber", type: "number", label: "Mobile Number", validation: {
      required: { value: true, message: "Your mobile number is required" },
      minLength: { value: 10, message: "Mobile number must contain at least 10 digits" },
      maxLength: { value: 10, message: "Mobile number can only contain upto 12 digits" }
    }
  },
  {
    name: "vehicleType", id: "vehicleType", type: "select", label: "Vehicle Type", options: [
      { label: "Select Vehicle Type", value: "" },
      { label: "All", value: "ALL" },
      { label: "Car", value: "CAR" },
      { label: "Bus", value: "BUS" },
      { label: "Tampo", value: "TAMPO" },
      { label: "Truck", value: "TRUCK" },
    ], validation: { required: { value: true, message: "Employee type is required" } }
  },
  { name: "state", id: "state", type: "text", label: "State", required: true, validation: { required: { value: true, message: "State is required" } } },
  { name: "city", id: "city", type: "text", label: "City", validation: { required: { value: true, message: "City is required" } } },
  { name: "aadharCard", id: "aadharCard", type: "file", label: "Aadhar Card", validation: { required: { value: true, message: "Aadhar card is required" } } },
  { name: "photo", id: "photo", type: "file", label: "Photo", validation: { required: { value: true, message: "Photo is required" } } },
  { name: "license", id: "license", type: "file", label: "License", validation: { required: { value: true, message: "License is required" } } },
]

export const cleanerFormFields = [
  { name: "name", id: "name", type: "text", label: "Name", validation: { required: { value: true, message: "Name is required" } } },
  {
      name: "mobileNumber", id: "mobileNumber", type: "text", label: "Mobile Number", validation: {
          required: { value: true, message: "Your mobile number is required" },
          minLength: { value: 10, message: "Mobile number must contain at least 10 digits" },
          maxLength: { value: 10, message: "Mobile number can only contain upto 12 digits" }
      }
  },
  { name: "password", id: "password", type: "password", label: "Password", validation: { required: { value: true, message: "Password is required" }, minLength: { value: 5, message: "Password must be atleast 5 characters" } }},
  { name: "city", id: "city", type: "text", label: "City",validation: { required: { value: true, message: "City is required" } } },
  { name: "state", id: "state", type: "text", label: "State", validation: { required: { value: true, message: "State is required" } } },
  { name: "aadharCard", id: "aadharCard", type: "file", label: "Aadhar Card", validation: { required: { value: true, message: "Aadhar Card is required" } } },
  { name: "photo", id: "photo", type: "file", label: "Photo", validation: { required: { value: true, message: "Photo is required" } } }
];

export const busFormFields = [
  { name: "number", id: "number", type: "text", label: "Vehicle Number", validation: { required: { value: true, message: "Vehicle Number is required" } } },
  { name: "seatingCapacity", id: "seatingCapacity", type: "number", label: "Seating Capacity" },
  { name: "model", id: "model", type: "text", label: "Model" },
  { name: "bodyType", id: "bodyType", type: "text", label: "Body Type" },
  { name: "chassisBrand", id: "chassisBrand", type: "text", label: "Chassis Brand" },
  { name: "location", id: "location", type: "text", label: "Location" },
  {
      name: "contactNumber", id: "contactNumber", type: "number", label: "Contact Number", validation: {
          required: { value: true, message: "Your mobile number is required" },
          minLength: { value: 10, message: "Mobile number must contain at least 10 digits" },
          maxLength: { value: 10, message: "Mobile number can only contain upto 12 digits" }
      }
  },
  { name: "photos", id: "photos", type: "file", label: "Photos", isMultiple: true, validation: { required: { value: true, message: "Photos are required" } } },
  { name: "isAC", id: "isAC", type: "radio", label: "Is AC", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], validation: { required: { value: true, message: "Is AC is required" } } },
  // { name: "type", id: "type", type: "text", label: "Body Type" },
  { name: "isSeatPushBack", id: "isSeatPushBack", type: "radio", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], label: "Is Seat Push Back" },
  { name: "isForRent", id: "isForRent", type: "radio", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], label: "Is For Rent", validation: { required: { value: true, message: "This field is required" }  }},
  { name: "isForSell", id: "isForSell", type: "radio", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], label: "Is For Sell",  validation: { required: { value: true, message: "This field is required" } } },
  { name: "isLuggageSpace", id: "isLuggageSpace", type: "radio", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], label: "Is Luggage Space Available" },
  { name: "isSleeper", id: "isSleeper", type: "radio", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], label: "Is Sleeper" },
  { name: "curtain", id: "curtain", type: "radio", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], label: "Curtain Available" },
  {
      name: "amenities", id: "amenities", type: "checkbox", label: "Amenities", options: [
          { label: "Wifi", value: "wifi" },
          { label: "Blanket", value: "blanket" },
          { label: "Bottle", value: "bottle" },
          { label: "Charger", value: "charger" },
          { label: "Meal", value: "meal" },
          { label: "Pillow", value: "pillow" },
          { label: "TV", value: "tv" }
      ]
  }
]

export const truckFormFields = [
  { name: "number", id: "number", type: "text", label: "Vehicle Number", validation: { required: "Vehicle Number is required" } },
  { name: "model", id: "model", type: "text", label: "Model" },
  { name: "bodyType", id: "bodyType", type: "text", label: "Body Type" },
  { name: "chassisBrand", id: "chassisBrand", type: "text", label: "Chassis Brand" },
  { name: "location", id: "location", type: "text", label: "Location" },
  {
      name: "contactNumber", id: "contactNumber", type: "number", label: "Contact Number", validation: {
          required: { value: true, message: "Your mobile number is required" },
          minLength: { value: 10, message: "Mobile number must contain at least 10 digits" },
          maxLength: { value: 10, message: "Mobile number can only contain upto 12 digits" }
      }
  },
  { name: "photos", id: "photos", type: "file", label: "Photos", isMultiple: true, validation: { required: { value: true, message: "Photos are required" } } },
  { name: "noOfTyres", id: "noOfTyres", type: "number", label: "Number of Tyres" },
  { name: "vehicleWeightInKGS", id: "vehicleWeightInKGS", type: "number", label: "Vehicle Weight (KGS)" },
  { name: "isAC", id: "isAC", type: "radio", label: "Is AC", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], validation: { required: { value: true, message: "Is AC is required" } } },
  { name: "isForRent", id: "isForRent", type: "radio", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], label: "Is For Rent", validation: { required: { value: true, message: "This field is required" } } },
  { name: "isForSell", id: "isForSell", type: "radio", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], label: "Is For Sell", validation: { required: { value: true, message: "This field is required" } } },
]

export const carFormFields = [
  { name: "number", id: "number", type: "text", label: "Vehicle Number", validation: { required: { value: true, message: "Vehicle Number is required" } } },
  { name: "seatingCapacity", id: "seatingCapacity", type: "number", label: "Seating Capacity" },
  { name: "model", id: "model", type: "text", label: "Model" },
  { name: "location", id: "location", type: "text", label: "Location" },
  {
      name: "contactNumber", id: "contactNumber", type: "number", label: "Contact Number", validation: {
          required: { value: true, message: "Your mobile number is required" },
          minLength: { value: 10, message: "Mobile number must contain at least 10 digits" },
          maxLength: { value: 10, message: "Mobile number can only contain upto 12 digits" }
      }
  },
  { name: "photos", id: "photos", type: "file", label: "Photos", isMultiple: true, validation: { required: { value: true, message: "Photos are required" } } },
  { name: "isAC", id: "isAC", type: "radio", label: "Is AC", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], validation: { required: { value: true, message: "Is AC is required" } } },
  { name: "isForRent", id: "isForRent", type: "radio", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], label: "Is For Rent", validation: { required: { value: true, message: "This field is required" } } },
  { name: "isForSell", id: "isForSell", type: "radio", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], label: "Is For Sell", validation: { required: { value: true, message: "This field is required" } } },
]

export const tampoFormFields = [
  { name: "number", id: "number", type: "text", label: "Vehicle Number", validation: { required: "Vehicle Number is required" } },
  { name: "model", id: "model", type: "text", label: "Model" },
  { name: "bodyType", id: "bodyType", type: "text", label: "Body Type" },
  { name: "location", id: "location", type: "text", label: "Location" },
  {
      name: "contactNumber", id: "contactNumber", type: "number", label: "Contact Number", validation: {
          required: { value: true, message: "Your mobile number is required" },
          minLength: { value: 10, message: "Mobile number must contain at least 10 digits" },
          maxLength: { value: 10, message: "Mobile number can only contain upto 12 digits" }
      }
  },
  { name: "photos", id: "photos", type: "file", label: "Photos", isMultiple: true, validation: { required: { value: true, message: "Photos are required" } } },
  { name: "isAC", id: "isAC", type: "radio", label: "Is AC", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], validation: { required: { value: true, message: "Is AC is required" } } },
  { name: "isForRent", id: "isForRent", type: "radio", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], label: "Is For Rent", validation: { required: { value: true, message: "This field is required" } } },
  { name: "isForSell", id: "isForSell", type: "radio", options: [{ label: "Yes", value: "true" }, { label: "No", value: "false" }], label: "Is For Sell", validation: { required: { value: true, message: "This field is required" } } },
]
