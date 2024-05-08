"use client"
import Navbar from "@/components/Navbar";
import TutorCard from "@/components/ui/tutorCard";
import { faCity, faFilter, faFunnelDollar, faHouse, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faCoffee, width } from "@fortawesome/free-solid-svg-icons/faCoffee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { error } from "console";
import React, { FormEvent, useEffect, useState } from "react";

type Tutor = {
    id: string;
    name: string;
    city: string;
    suburb: string;
    startingPrice: number;
    endingPrice: number;
};

function SearchPage() {

    const [tutors, setTutors] = useState<Tutor[]>([]);
    const [filters, setFilters] = useState<any>({});
    const [loadingVisibility, setLoadingVisibility] = useState('none');

    async function fetchTutors(data: any) {
        const hostname = process.env.NEXT_PUBLIC_HOSTNAME;
        try {
            const res = await fetch(`${hostname}/tutor/search`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            let json = await res.json();
            setTutors(json);
        } catch (err) {
            console.log(err);
        }
    }

    function filterEmptyProperties<T extends Record<string, any>>(obj: T): T {
        const filteredObj: Partial<T> = {};
        for (const [key, value] of Object.entries(obj)) {
            if (value !== null && value !== undefined && value !== '') {
                filteredObj[key as keyof T] = value;
            }
        }
        return filteredObj as T;
    }
    

    const submitFilter = (e: FormEvent<HTMLElement>) => {
        e.preventDefault();

        const nonEmptyFilters = filterEmptyProperties(filters);

        setLoadingVisibility('block'); 
        
        fetchTutors(nonEmptyFilters)
            .then(res => {
                setLoadingVisibility('none');
            })
    }

    const getCitySelection = (event: any) => {
        setFilters((prevState: any) => ({
            ...prevState,
            ['city']: event.target.value,
        }));
    };

    const getSuburbSelection = (event: any) => {
        setFilters((prevState: any) => ({
            ...prevState,
            ['suburb']: event.target.value,
        }));
    }

    const getPriceSelection = (event: any) => {
        setFilters((prevState: any) => ({
            ...prevState,
            ['price']: event.target.value,
        }));
    }

    const filter = {
        marginRight: 20,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'rgb(59, 130, 246)',
        borderRadius: 100,
        color: 'white',
        cursor: 'pointer'
    }

    return (

        <div className="page" style={{
            display: 'flex',
        }}>
            <div className="left sidebar" style={{
                width: '15%',
                height: '100vh',
                backgroundColor: 'rgb(59, 130, 246)',
                position: 'fixed',
                padding: 20
            }}>
                <h1 style={{ fontWeight: 1000, color: 'white', fontSize: 18 }}>Phoenix Tutorium</h1>

                <h2 style={{ color: 'white', fontWeight: 500, marginTop: 20 }}>Filters</h2>

                <h3 style={{ color: 'white', fontWeight: 300, marginTop: 40, marginBottom: 5 }}>City</h3>

                <form method="POST" onSubmit={submitFilter}>
                    <select
                        className="select select-bordered w-full max-w-xs"
                        // value={selectedCity}
                        onChange={getCitySelection}
                    >
                        <option disabled></option>
                        <option value="">Search City</option>
                        <option value="Cape Town">Cape Town</option>
                        <option value="Johannesburg">Johannesburg</option>
                        <option value="Durban">Durban</option>
                    </select>

                    <h3 style={{ color: 'white', fontWeight: 300, marginTop: 20, marginBottom: 5 }}>Suburb</h3>
                    <select 
                        className="select select-bordered w-full max-w-xs"
                        onChange={getSuburbSelection}    
                    >
                        <option disabled></option>
                        <option value="">Search Suburb</option>
                        <option value="Khayelitsha">Khayelitsha</option>
                        <option value="Mitchelles Plain">Mitchelles plain</option>
                    </select>

                    <h3 style={{ color: 'white', fontWeight: 300, marginTop: 20, marginBottom: 5 }}>Charging rate (hour)</h3>
                    <select 
                        className="select select-bordered w-full max-w-xs"
                        onChange={getPriceSelection}
                    >
                        <option disabled></option>
                        <option value="">Choose range</option>
                        <option value="150-200">150-200</option>
                        <option value="200-250">200-250</option>
                        <option value="250-300">250-300</option>
                        <option value="300-350">300-350</option>
                    </select>

                    <button type="submit" 
                        style={{ 
                            marginTop: 40, 
                            backgroundColor: 'rgb(55, 65, 81)',
                            padding: 10,
                            borderRadius: 10,
                            width: '100%',
                            color: 'white'
                        }}>Submit</button>
                </form>
            </div>

            <div className="right" style={{
                width: '85%',
                marginLeft: '15%'
            }}>
                <div className="navwrapper" style={{ position: "fixed", width: '85%' }}>
                    <Navbar />
                </div>

                <div className="search-content" style={{
                    padding: 80,
                    paddingTop: 100
                }}>
                    <div className="filterOptions" style={{
                        display: 'flex',
                        marginRight: 10,
                        marginBottom: 20
                    }}>
                        <div className="filter" style={filter}>Cape Town <span>x</span></div>
                        <div className="filter" style={filter}>Khayelitsha <span>x</span></div>
                        <div className="filter" style={filter}>200-300 <span>x</span></div>
                    </div>

                    <h1 style={{ fontSize: 22 }}>Results: {tutors.length}</h1>
                    <div className="search-results">

                    <div className="loading" style={{ display: loadingVisibility }}>
                        <span className="loading loading-bars loading-xs"></span>
                        <span className="loading loading-bars loading-sm"></span>
                        <span className="loading loading-bars loading-md"></span>
                        <span className="loading loading-bars loading-lg"></span>
                    </div>

                    {tutors.map((tutor: any, index: number) => (
                        <TutorCard
                            key={index} 
                            firstName={tutor.firstName}
                            lastName={tutor.lastName}
                            image={'https://media.istockphoto.com/id/163174954/photo/male-portrait.jpg?s=2048x2048&w=is&k=20&c=2_0KhrOEQphsS5slQMlcKvFF7xNIcU9aNMDnYotZ42o='}
                            bio={tutor.tutor.bio}
                            city={tutor.tutor.city}
                            suburb={tutor.tutor.suburb}
                        />
                    ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchPage;