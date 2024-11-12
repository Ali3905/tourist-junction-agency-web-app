"use client"

import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'

type FormType = {
    userName: string;
    password: string;
}

const page = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
    const onSubmit = async (data: FormType) => {
        try {
            const res = await axios({
                method: "post",
                baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
                url: "/user/login",
                data,
            })  
            
            document.cookie = `authtoken=${res.data.authToken}; path=/;`
            alert("You have logged in to your account")
        } catch (error) {
            console.log(error);
            alert(error?.data?.response?.message || "Could not log you in to your account, Check your creds")
        }

    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <form className='flex flex-col gap-[20px] w-[30%]' onSubmit={handleSubmit(onSubmit)}>
                <span className='self-center text-center mb-[50px]'>
                    <p className='font-bold text-[32px]'>Welcom Back!</p>
                    <p className='font-semibold text-[20px]'>Login to your Account</p>
                </span>
                <label htmlFor="userName" className='flex flex-col gap-2'>
                    User Name
                    <input {...register("userName", { required: "Username is required" })} type="text" name='userName' id='userName' className='border rounded-md px-4 py-2' />
                    {errors.userName && errors.userName?.message &&
                        typeof errors.userName?.message === 'string' ? (
                        <span className='text-red-500'>{errors.userName?.message?.toString()}</span>
                    ) : null
                    }
                </label>
                <label htmlFor="password" className='flex flex-col gap-2'>
                    Password
                    <input {...register("password", { required: "Password is required" })} type="password" name='password' id='password' className='border rounded-md px-4 py-2' />
                    {errors.password && errors.password?.message &&
                        typeof errors.password?.message === 'string' ? (
                        <span className='text-red-500'>{errors.password?.message?.toString()}</span>
                    ) : null
                    }
                </label>
                <button type='submit' className='px-4 py-2 bg-blue-400 rounded-md'>{isSubmitting ? "Logging you to your account" : "Login"}</button>
            </form>
        </div>
    )
}

export default page