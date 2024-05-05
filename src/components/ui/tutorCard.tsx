"use client"
import { faLocation, faLocationDot, faLocationPin, faLocationPinLock, faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

function TutorCard(props: any) {

    const cardStyle = {
        padding: 20,
        boxShadow: '0 8px 12px 0 rgba(0, 0, 0, 0.2)',
        borderRadius: 8,
        marginBottom: 20,
        display: 'flex'
    }

    const imgWrapper = {
        width: 160,
    }

    const info = {
        padding: 20
    }

    return (
        <div className="tutor-card" style={cardStyle}>
            <div className="image" style={imgWrapper}>
                <img src={props.image} style={{ borderRadius: 8, border: 'solid rgb(53, 130, 245)' }} height="100%" width="100%" alt="" />
            </div>
            <div className="info" style={info}>
                <h1 style={{ color: 'rgb(53, 130, 245)', fontWeight: 700, fontSize: 20 }}>{props.firstName} {props.lastName} 
                    <span style={{
                        fontStyle: 'italic',
                        color: 'black',
                        fontSize: 12,
                        marginLeft: 12,
                        fontWeight: 400
                    }}><FontAwesomeIcon icon={faLocationDot} /> {props.city}, {props.suburb}</span>
                </h1>
                <p>{props.bio}</p>
            </div>
        </div>
    )
}

export default TutorCard