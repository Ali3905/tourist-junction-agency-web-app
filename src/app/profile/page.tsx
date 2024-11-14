import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';
import ResetButton from './ResetButton';


const handleGetUser = async () => {
  const authtoken = cookies().get('authtoken')?.value;
  if (!authtoken) {
    redirect("/login");
  }

  try {
    const res = await axios({
      method: "get",
      baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
      url: "/user",
      headers: { authtoken },
    });
    return res.data.data;
  } catch (error) {
    alert(error?.response?.data?.message || "Could not fetch the user details");
    console.log(error);
  }
};

const PageContainer = async () => {
  const user = await handleGetUser();
  const excludedFields = ["password", "_id", "createdAt", "updatedAt", "isVerified", "__v", "trialValidTill", "isSubsciptionValid"];

  return (
    <div className="w-full flex flex-col items-center space-y-4">
      {Object.keys(user)
        .filter((key) => !excludedFields.includes(key))
        .map((key) => (
          <div key={key} className="w-3/5 md:w-1/2 lg:w-1/3 text-left">
            <p className="font-semibold text-gray-700 mb-1 capitalize">{key}</p>
            <div className="border border-gray-300 p-4 rounded-md bg-white shadow-md">
              <p className="text-gray-600">
                {Array.isArray(user[key]) ? `${user[key].length} items` : user[key]}
              </p>
            </div>
          </div>
        ))}
      <ResetButton mobileNumber={user.mobileNumber} />
    </div>
  );
};

const page = () => (
  <div className='py-[50px]'>
    <PageContainer />
  </div>
);

export default page;
