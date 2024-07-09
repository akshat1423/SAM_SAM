import React from 'react';
import './ctm.css';
import aditya from'./aditya.jpg';
import arnav from'./arnav.jpg';
const profiles = [
    {
        name: 'Arnav Mishra',
        image: arnav,
        contact:9534172952
    },
    {
        name: 'Aditya Singh',
        image: aditya,
        contact:8954140306,
    }
];

const Ctm = () => {
    return (
        <div className="profile-container">
            <h2 className="profile-heading">Event Heads</h2>
            <div className="profiles">
                {profiles.map((profile, index) => (
                    <div className="profile-card" key={index}>
                        <img src={profile.image} alt={profile.name} className="profile-image" />
                        <h3 className="profile-name">{profile.name}</h3>
                        <h3 className="profile-name">{profile.contact}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ctm;
