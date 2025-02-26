import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'

const RoutesComponent = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </>
    )
}

export default RoutesComponent