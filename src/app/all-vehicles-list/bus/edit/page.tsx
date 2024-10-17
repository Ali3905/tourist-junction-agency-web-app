"use client"
import React from 'react'
import FormContainer from './FormContainer'
import { Provider } from 'react-redux'
import store from '@/app/redux/store'

const page = () => {

  return (
    <Provider store={store} >
      <FormContainer />
    </Provider>
  )
}

export default page