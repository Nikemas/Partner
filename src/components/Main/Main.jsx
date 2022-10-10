import React from 'react'
import { Kalendar } from '../Kalendar/Kalendar'
import { MainInfo } from '../MainInfo/MainInfo'
import { MainPay } from '../MainPay/MainPay'
import { MainPrice } from '../MainPrice/MainPrice'

export const Main = () => {
  return (
    <div>
        <MainInfo/>
        <MainPrice/>
        <MainPay/>
        <Kalendar/>
    </div>
  )
}
