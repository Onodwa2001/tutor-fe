"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken';

function Navbar() {

    const currentPathname = usePathname();
    const router = useRouter();
    let [displaySearchBtn, setdisplaySearchBtn] = useState('');
    let [displaySearchInput, setDisplaySearchInput] = useState('none');
    const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
    const [userId, setUserId] = useState<string>('');

    const handleSearchBtnClick = () => {
        router.push('/search');
    }

    const decodeToken = (token: any) => {
        try {
            const decoded = jwt.decode(token);
            return decoded;
        } catch (error: any) {
            console.error('Error decoding token:', error.message);
            return null;
        }
    };

    useEffect(() => {
        if (currentPathname === '/search') {
            setdisplaySearchBtn('none');
            setDisplaySearchInput('block');
        }

        // Check if `window` and `localStorage` are defined
        if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
            const authToken = localStorage.getItem('auth_token');
            setLoggedInUser(authToken);
            const decodedToken = JSON.parse(JSON.stringify(decodeToken(authToken)));
            setUserId(decodedToken.id);
        }
    }, [])

    return (
        <div className="navbar bg-base-100" style={{
            boxShadow: '0px 18px 20px 0px rgba(0, 0, 0, 0.15)',
            borderRadius: 8,
            width: '95%',
            margin: 'auto',
            zIndex: 2
        }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">Phoenix Tutorium</a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle" onClick={handleSearchBtnClick} style={{ display: displaySearchBtn }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <div className="form-control" style={{ display: displaySearchInput }}>
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>

                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>

            { loggedInUser != null && (
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link className="justify-between" href="/profile/[slug]" as={`/profile/${userId}`}>
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li>
                            <a onClick={() => {
                                localStorage.removeItem('auth_token');
                                router.push('/login')
                            }}
                            >Logout</a></li>
                    </ul>
                </div> 
            )}

            {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
        </div>
    )
}

export default Navbar