import React from 'react';
import { Navbar } from '../components/index';
import { Outlet } from 'react-router-dom';
import SiteBar from '../components/navbar/SiteBar';
const RootLayout = () => {
    return (
        <main className="bg-neutral-50 font-Inter">
            <Navbar />
            <div className="overflow-hidden">
                <Outlet />
            </div>
        </main>
    );
}

export default RootLayout;
