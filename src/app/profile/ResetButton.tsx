"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'

const ResetButton = ({ mobileNumber }: { mobileNumber: string }) => {
    const router = useRouter()
    const handleSendOtpForResetPassword = async (mobileNumber: string) => {
        try {
            const res = await axios({
                method: "post",
                baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
                url: "/user/reset/sendOtp",
                data: { mobileNumber }
            });
            alert("Otp has been sent on your phone number. Verify it to change password")
            router.push("/verifyOtp")
        } catch (error) {
            alert(error?.response?.data?.message || "Could not send otp");
            console.log(error);
        }
    }
    return (
        <button className='bg-red-500 text-white font-semibold py-2 w-3/5 md:w-1/2 lg:w-1/3 rounded-md' onClick={() => handleSendOtpForResetPassword(mobileNumber)}>Reset Password</button>
    )
}

export default ResetButton