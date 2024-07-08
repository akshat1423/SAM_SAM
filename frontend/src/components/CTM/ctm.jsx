import React from 'react';
import './ctm.css';

const profiles = [
    {
        name: 'Arnav Mishra',
        image: 'https://th.bing.com/th?q=Random+Deafult+Profile+Picture&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=2&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247'
    },
    {
        name: 'Aditya Singh',
        image: 'https://th.bing.com/th?q=Random+Deafult+Profile+Picture&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=2&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247'
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ctm;
