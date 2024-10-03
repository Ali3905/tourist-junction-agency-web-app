import axios from "axios"

export const getDrivers = async() => {
    try {
        const res = await axios({
            method: "get",
            baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
            url: "/driver",
            headers: {
                authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN
            }
        })
        return res.data.data
    } catch (error: any) {
        alert(error?.response?.data?.message || "Could not fetch the driver data")
        console.log(error?.response?.data?.message); 
    }
}

export const getCleaners = async() => {
    try {
        const res = await axios({
            method: "get",
            baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
            url: "/cleaner",
            headers: {
                authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN
            }
        })
        return res.data.data
    } catch (error: any) {
        alert(error?.response?.data?.message || "Could not fetch the cleaner data")
        console.log(error?.response?.data?.message); 
    }
}

export const getVehicles = async() => {
    try {
        const res = await axios({
            method: "get",
            baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
            url: "/vehicle",
            headers: {
                authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN
            }
        })
        return res.data.data
    } catch (error: any) {
        alert(error?.response?.data?.message || "Could not fetch the cleaner data")
        console.log(error?.response?.data?.message); 
    }
}

export const getDriverIdrDropdownOptions = async() => {
    const drivers = await getDrivers()
    if (!drivers) {
        return []
    }
    const driverOptions = drivers.map((dri: Driver)=>{
        return { value: dri._id, label: dri.name }
    })
    return driverOptions
}

export const getCleanerIdrDropdownOptions = async() => {
    const cleaners = await getCleaners()
    if (!cleaners) {
        return []
    }
    const cleanerOptions = cleaners.map((cl: Cleaner)=>{
        return { value: cl._id, label: cl.name }
    })
    return cleanerOptions
}

export const getVehicleNumberDropdownOptions = async() => {
    const vehicles = await getVehicles()
    if (!vehicles.vehicles) {
        return []
    }
    const vehicleOptions = vehicles?.vehicles.map((veh: Vehicle)=>{
        return { value: veh.number, label: veh.number?.toUpperCase() }
    })
    return vehicleOptions
}

export const getVehicleIdDropdownOptions = async() => {
    const vehicles = await getVehicles()
    if (!vehicles.vehicles) {
        return []
    }
    const vehicleOptions = vehicles?.vehicles.map((veh: Vehicle)=>{
        return { value: veh._id, label: veh.number?.toUpperCase() }
    })
    return vehicleOptions
}