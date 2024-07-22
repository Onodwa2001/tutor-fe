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

    const handleSocialBtnClick = () => {
        router.push('/social');
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
            setUserId(decodedToken?.id);
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

                <button className="btn btn-ghost btn-circle" onClick={handleSocialBtnClick} >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clip-rule="evenodd" d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 13.4811 3.09753 14.8788 3.7148 16.1181C3.96254 16.6155 4.05794 17.2103 3.90163 17.7945L3.30602 20.0205C3.19663 20.4293 3.57066 20.8034 3.97949 20.694L6.20553 20.0984C6.78973 19.9421 7.38451 20.0375 7.88191 20.2852C9.12121 20.9025 10.5189 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C10.2817 22.75 8.65552 22.3463 7.21315 21.6279C6.99791 21.5207 6.77814 21.4979 6.59324 21.5474L4.3672 22.143C2.84337 22.5507 1.44927 21.1566 1.857 19.6328L2.4526 17.4068C2.50208 17.2219 2.47933 17.0021 2.37213 16.7869C1.65371 15.3445 1.25 13.7183 1.25 12ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5ZM7.25 14C7.25 13.5858 7.58579 13.25 8 13.25H13.5C13.9142 13.25 14.25 13.5858 14.25 14C14.25 14.4142 13.9142 14.75 13.5 14.75H8C7.58579 14.75 7.25 14.4142 7.25 14Z" fill="#1C274C"></path> </g></svg>
                </button>

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