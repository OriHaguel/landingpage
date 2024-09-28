import React from 'react'
import { Routes, Route } from 'react-router'
import { AppHeader } from './cmps/AppHeader'






export function RootCmp() {
    return (
        <div className="main-container">
            <AppHeader />


            <main>
                <Routes>
                    {/* <Route path='/' element={< />} /> */}


                </Routes>
            </main>
        </div>
    )
}


