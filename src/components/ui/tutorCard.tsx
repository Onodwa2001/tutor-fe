"use client"
import { faLocation, faLocationDot, faLocationPin, faLocationPinLock, faMapLocation, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { DragCloseDrawerExample } from './tutorDetails'
import { height } from '@fortawesome/free-solid-svg-icons/faCoffee'

type MyStyle = {
    padding: number;
    boxShadow: string;
    borderRadius: number;
    marginBottom: number;
    display: string;
    position: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'; // Modify this line
};

function TutorCard(props: any) {

    const [token, setToken] = useState<string | null>(null);
    const [disbaled, setDisabled] = useState<boolean>(false);

    useEffect(() => {
        // Check if `window` and `localStorage` are defined
        let localToken: string | null = null;
        if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
            const authToken = localStorage.getItem('auth_token');
            console.log(authToken);
            localToken = authToken;
            setToken(authToken);
        }

        async function checkIfIsFriends() {
            const hostname = process.env.NEXT_PUBLIC_HOSTNAME;
            let success = await fetch(`${hostname}/checkconnrequest/${props?.id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localToken}`,
                    'Content-Type': 'application/json'
                }
            });

            return success;
        }
        
        checkIfIsFriends().then((data) => data.json()).then(res => setDisabled(res));
    }, [])

    const cardStyle: MyStyle = {
        padding: 20,
        boxShadow: '0 8px 12px 0 rgba(0, 0, 0, 0.2)',
        borderRadius: 8,
        marginBottom: 20,
        display: 'flex',
        position: 'relative'
    }

    const imgWrapper = {
        width: 180,
    }

    const info = {
        padding: 20,
    }

    const handleConnect = async (event: any) => {
        const hostname = process.env.NEXT_PUBLIC_HOSTNAME;
        console.log(token)
        await fetch(`${hostname}/connectionRequest/${props?.id}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        setDisabled(true);
    }

    return (
        <div className="tutor-card" style={cardStyle}>
            <div style={{
                position: 'absolute',
                right: 30
            }}>
                <FontAwesomeIcon icon={faMoneyBill} /> R {props?.chargePerHour}
            </div>
            <div className="image" style={imgWrapper}>
                <img src={props?.image} style={{ borderRadius: 8, border: 'solid rgb(53, 130, 245)', height: '140px' }} height="100%" width="100%" alt="" />
            </div>
            <div className="info" style={info}>
                <h1 style={{ color: 'rgb(53, 130, 245)', fontWeight: 700, fontSize: 20 }}>{props?.firstName} {props?.lastName} 
                    <span style={{
                        fontStyle: 'italic',
                        color: 'black',
                        fontSize: 12,
                        marginLeft: 12,
                        fontWeight: 400
                    }}><FontAwesomeIcon icon={faLocationDot} /> {props?.city}, {props?.suburb}</span>
                </h1>
                <p>{props?.bio}</p>
                <DragCloseDrawerExample 
                    firstName={props?.firstName}
                    lastName={props?.lastName}
                    image={'https://media.istockphoto.com/id/163174954/photo/male-portrait.jpg?s=2048x2048&w=is&k=20&c=2_0KhrOEQphsS5slQMlcKvFF7xNIcU9aNMDnYotZ42o='}
                    bio={props?.tutor?.bio}
                    city={props?.tutor?.city}
                    suburb={props?.tutor?.suburb}
                />
                <button className="btn"
                    onClick={handleConnect}
                    style={{
                        position: 'absolute',
                        right: 20,
                        bottom: 18
                    }}
                    disabled={disbaled}
                >{disbaled ? 'Request Sent' : 'Connect'}</button>
            </div>
        </div>
    )
}

export default TutorCard