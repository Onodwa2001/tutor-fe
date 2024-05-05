"use client"
import Navbar from "@/components/Navbar";
import TutorCard from "@/components/ui/tutorCard";
import { faCity, faFilter, faFunnelDollar, faHouse, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faCoffee, width } from "@fortawesome/free-solid-svg-icons/faCoffee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { error } from "console";
import React, { useEffect, useState } from "react";

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

    async function fetchData() {
        const hostname = process.env.NEXT_PUBLIC_HOSTNAME;
        try {
            const res = await fetch(`${hostname}/tutor/search`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    city: "Cape Town",
                    suburb: "Khayelitsha"
                }),
            });
            let json = await res.json();
            setTutors(json);
        } catch (err) {
            console.log(err);
        }
    }

    const handleFilterSearch = () => {
        fetchData();
    }

    const [selectedCity, setSelectedCity] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    // Event handler for select change
    const handleSelectChange = (event: any) => {
        setSelectedCity(event.target.value);
    };

    // Event handler for checkbox change
    const handleCheckboxChange = (event: any) => {
        setIsChecked(event.target.checked);
        if (event.target.checked) {
            // Checkbox is checked, log the current selection
            console.log('Current selection:', selectedCity);
        }
    };

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
                <select
                className="select select-bordered w-full max-w-xs"
                value={selectedCity}
                onChange={handleSelectChange}
            >
                <option value="Search City" disabled>Search City</option>
                <option value="Cape Town">Cape Town</option>
                <option value="Johannesburg">Johannesburg</option>
            </select>

            <label htmlFor="city" style={{ color: 'white', marginRight: 10 }}>Add city filter</label>
            <input
                type="checkbox"
                name="city"
                id="city"
                onChange={handleCheckboxChange}
                checked={isChecked}
            />

                <h3 style={{ color: 'white', fontWeight: 300, marginTop: 40, marginBottom: 5 }}>Suburb</h3>
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled>Search Suburb</option>
                    <option>Khayelitsha</option>
                    <option>Mitchelle's plain</option>
                </select>
                <label htmlFor="suburb" style={{ color: 'white', marginRight: 10 }}>Add suburb filter</label>
                <input type="checkbox" name="suburb" id="" />

                <h3 style={{ color: 'white', fontWeight: 300, marginTop: 40, marginBottom: 5 }}>Charging rate (hour)</h3>
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled>Choose range</option>
                    <option>150-200</option>
                    <option>200-250</option>
                    <option>250-300</option>
                </select>
                <label htmlFor="suburb" style={{ color: 'white', marginRight: 10 }}>Add suburb filter</label>
                <input type="checkbox" name="suburb" id="" />
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