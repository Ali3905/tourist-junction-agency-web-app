import axios from "axios"
import { redirect } from "next/navigation"

export async function fetchData(url: string, authtoken: string) {
    if (!authtoken) {
        redirect("/login")
    }
    try {
        const res = await axios({
            method: "get",
            baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
            url: url,
            headers: {
                authtoken
            }
        })
        
        return res.data.data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error : any) {
        return  error.response.data
    }
}

type DeleteHandlerParams = {
    params: {
        [key: string]: string,
    },
    url: string
}


export async function deleteData({params, url}: DeleteHandlerParams)  {
    try {
        const res = await axios({
            method: "delete",
            baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
            url,
            params,
            headers: {
                authtoken: process.env.NEXT_PUBLIC_AUTH_TOKEN
            }
        })
        alert(res.data?.message || "Item Deleted")
        return res.data.data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        return  error.response.data
    }
}

