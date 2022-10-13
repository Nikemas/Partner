import React from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import s from './App.module.css'

export const App = () => {
  return (
    <div className={s.wrapper}>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}
