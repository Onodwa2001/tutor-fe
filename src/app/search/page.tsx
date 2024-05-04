import Navbar from "@/components/Navbar";
import { faCity, faFilter, faFunnelDollar, faHouse, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons/faCoffee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SearchPage() {

    const card = {
        padding: 20,
        boxShadow: '0 8px 12px 0 rgba(0, 0, 0, 0.2)',
        borderRadius: 8,
        marginBottom: 20
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
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Search City</option>
                    <option value="1">Han Solo</option>
                    <option value="1">Greedo</option>
                </select>
                <label htmlFor="city" style={{ color: 'white', marginRight: 10 }}>Add city filter</label>
                <input type="checkbox" name="city" id="" />

                <h3 style={{ color: 'white', fontWeight: 300, marginTop: 40, marginBottom: 5 }}>Suburb</h3>
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Search Suburb</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <label htmlFor="suburb" style={{ color: 'white', marginRight: 10 }}>Add suburb filter</label>
                <input type="checkbox" name="suburb" id="" />

                <h3 style={{ color: 'white', fontWeight: 300, marginTop: 40, marginBottom: 5 }}>Charging rate (hour)</h3>
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Choose range</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
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

                    <h1 style={{ fontSize: 22 }}>Results: 3</h1>
                    <div className="search-results">
                        <div className="tutor-card" style={card}>
                            <h1>Mike James</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, enim recusandae. Placeat corrupti libero atque ullam ut, labore velit aliquam architecto consectetur veniam et ipsum deleniti tempora eaque nam? Ipsa.</p>
                        </div>
                        <div className="tutor-card" style={card}>
                            <h1>Mike James</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, enim recusandae. Placeat corrupti libero atque ullam ut, labore velit aliquam architecto consectetur veniam et ipsum deleniti tempora eaque nam? Ipsa.</p>
                        </div>
                        <div className="tutor-card" style={card}>
                            <h1>Mike James</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, enim recusandae. Placeat corrupti libero atque ullam ut, labore velit aliquam architecto consectetur veniam et ipsum deleniti tempora eaque nam? Ipsa.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchPage;