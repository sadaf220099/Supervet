import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router-dom'

function DashboardOutlet() {
    return (
        <div className="w-full min-h-screen overflow-x-hidden">

            <div className="flex-1">
                <Outlet />
            </div>
        </div>

    )
}

export default DashboardOutlet
