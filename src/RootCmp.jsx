import React from 'react'
import { Routes, Route } from 'react-router'
import { AppHeader } from './cmps/AppHeader'
import { Home } from './page/Home'

export function RootCmp() {
    return (
        <div className="main-container">
            <AppHeader />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/submit' element={<Home />} />
                </Routes>
            </main>
        </div>
    )
}


