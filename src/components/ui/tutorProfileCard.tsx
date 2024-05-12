// "use client"
import filterEmptyProperties from '@/app/utils/filterEmptyProps';
import { usePathname, useRouter } from 'next/navigation';
import React, { FormEvent, useEffect, useState } from 'react'

export default function TutorProfileCard(props: any) {
    const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [suburb, setSuburb] = useState<string>('');
    const [buttonName, setButtonName] = useState<string>('Confirm Update');
    const [closeModal, setCloseModal] = useState<boolean>(false);
    const [inProfilePage, setInProfilePage] = useState<boolean>(false);

    useEffect(() => {
        // Check if `window` and `localStorage` are defined
        if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
            const authToken = localStorage.getItem('auth_token');
            setLoggedInUser(authToken);
            let pathname = window.location.pathname.split('/')[1];

            if (pathname === 'profile') {
                setInProfilePage(true);
            }
        }
    }, [])

    const handleUpdateTrigger = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setButtonName('Loading...');

        const updateData = filterEmptyProperties({ firstName, lastName, city, suburb });

        const hostname = process.env.NEXT_PUBLIC_HOSTNAME;
        const result = await fetch(`${hostname}/user/update/${props.userData.id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${loggedInUser}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        });

        if (result !== null) {
            setButtonName('Confirm Update');
            props.sendSignalToParent(true);
            setCloseModal(true);
        }
    }

    return (
        <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable"
            style={{
                width: '70%',
                margin: 'auto',
                marginTop: 50,
                boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.2)'
            }}
        >
            {/* card body */}
            <div className="px-9 pt-9 flex-auto min-h-[70px] pb-0 bg-transparent" >
                <div className="flex flex-wrap mb-6 xl:flex-nowrap">
                    <div className="mb-5 mr-5">
                        <div className="relative inline-block shrink-0 rounded-2xl">
                            <img className="inline-block shrink-0 rounded-2xl w-[80px] h-[80px] lg:w-[160px] lg:h-[160px]" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg" alt="image" />
                            <div className="group/tooltip relative">
                                <span className="w-[15px] h-[15px] absolute bg-success rounded-full bottom-0 end-0 -mb-1 -mr-2  border border-white"></span>
                                <span className="text-xs absolute z-10 transition-opacity duration-300 ease-in-out px-3 py-2 whitespace-nowrap text-center transform bg-white rounded-2xl shadow-sm bottom-0 -mb-2 start-full ml-4 font-medium text-secondary-inverse group-hover/tooltip:opacity-100 opacity-0 block"> Status: Active </span>
                            </div>
                        </div>
                    </div>
                    <div className="grow">
                        <div className="flex flex-wrap items-start justify-between mb-2">
                            <div className="flex flex-col">
                                <div className="flex items-center mb-2">
                                    <a className="text-secondary-inverse hover:text-primary transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1" href=""> {props.userData.firstName} {props.userData.lastName} </a>
                                </div>
                                <div className="flex flex-wrap pr-2 mb-4 font-medium">
                                    <a className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary" href="">
                                        <span className="mr-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                            </svg>
                                        </span> {props.userData.tutor?.city}, {props.userData.tutor?.suburb} </a>
                                    <a className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary" href="">
                                        <span className="mr-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                            </svg>
                                        </span> {props.userData.email} </a>
                                </div>
                            </div>
                            {!inProfilePage && (
                                <div className="flex flex-wrap my-auto">
                                    <a href="" className="inline-block px-6 py-3 mr-3 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out border-0 shadow-none cursor-pointer rounded-2xl text-muted bg-light border-light hover:bg-light-dark active:bg-light-dark focus:bg-light-dark "> Connect </a>
                                    <a href="" className="inline-block px-6 py-3 text-base font-medium leading-normal text-center text-white align-middle transition-colors duration-150 ease-in-out border-0 shadow-none cursor-pointer rounded-2xl bg-primary hover:bg-primary-dark active:bg-primary-dark focus:bg-primary-dark "> Message </a>
                                </div>
                            )}
                            {inProfilePage && (
                                <div className="flex flex-wrap my-auto">
                                    {/* The button to open modal */}
                                    <label htmlFor="my_modal_7" className="btn leading-normal text-white align-middle transition-colors duration-150 ease-in-out border-0 shadow-none cursor-pointer rounded-2xl bg-primary hover:bg-primary-dark active:bg-primary-dark focus:bg-primary-dark ">
                                        Edit profile
                                    </label>

                                    {!closeModal && (
                                        <><input type="checkbox" id="my_modal_7" className="modal-toggle" /><div className="modal" role="dialog" style={{ width: 'fit-content !important', margin: 'auto' }}>
                                            <div className="modal-box">
                                                <h3 className="text-lg font-bold mb-9">Edit your profile</h3>

                                                <form method="POST" onSubmit={handleUpdateTrigger}>

                                                    <label htmlFor="firstName">First Name:</label>
                                                    <input type="text" name='firstName' onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your first name" className="input input-bordered w-full" />

                                                    <label htmlFor="lastName">Last Name:</label>
                                                    <input type="text" name='lastName' onChange={(e) => setLastName(e.target.value)} placeholder="Enter your last name" className="input input-bordered w-full" />

                                                    <label htmlFor="city">City:</label>
                                                    <input type="text" name='city' onChange={(e) => setCity(e.target.value)} placeholder="Enter your city" className="input input-bordered w-full" />

                                                    <label htmlFor="suburb">Suburb:</label>
                                                    <input type="text" name='suburb' onChange={(e) => setSuburb(e.target.value)} placeholder="Enter your suburb" className="input input-bordered w-full" />

                                                    <button className="btn btn-active btn-primary mt-7" type='submit'>{buttonName}</button>

                                                </form>
                                            </div>
                                            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                                        </div></>
                                    )}
                                </div>
                            )}

                        </div>
                        <div className="flex flex-wrap justify-between">
                            <div className="flex flex-wrap items-center">
                                <a href="" className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"> 320 Followers </a>
                                <a href="" className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"> 2.5 Rating </a>
                                <a href="" className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"> 48 Connections </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
