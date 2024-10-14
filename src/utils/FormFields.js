export const tourFormFields = [
  { name: "name", id: "name", type: "text", label: "Name of the Tour" },
  { name: "officeAddress", id: "officeAddress", type: "text", label: "Office Address" },
  { name: "location", id: "location", type: "text", label: "Location" },
  { name: "primaryMobileNumber", id: "primaryMobileNumber", type: "number", label: "Primary Mobile Number" },
  { name: "secondaryMobileNumber", id: "secondaryMobileNumber", type: "number", label: "Secondary Mobile Number" },
  { name: "photos", id: "photos", type: "file", label: "Photos", isMultiple: true }
]

export const vehicleServiceFormFields = [
  { name: "garageName", id: "garageName", type: "text", label: "Garage Name", validation: { required: "Garage Name is required" } },
  { name: "garageNumber", id: "garageNumber", type: "text", label: "Garage Number", validation: { required: "Garage Number is required" } },
  { name: "vehicleNumber", id: "vehicleNumber", type: "select", options: vehicleOptions, label: "Vehicle Number", validation: { required: "Vehicle Number is required" } },
  { name: "workDescription", id: "workDescription", type: "text", label: "Work Description", validation: { required: "Work description is required" } },
  { name: "date", id: "date", type: "date", label: "Date", validation: { required: "Date is required" } },
  { name: "bill", id: "bill", type: "file", label: "Bill", isMultiple: true, validation: { required: { value: true, message: "Bill Photos are required" } } },
]

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
