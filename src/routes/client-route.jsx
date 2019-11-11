import React, { useState, useEffect } from 'react';
import MicroFrontend from "../components/micro-frontend";

const ClientRoute = () => {
    const [profileClicked, setProfileClicked] = useState(false);

    useEffect(() => {
        window.eventEmitter.on('ProfileSubmit', () => {
            setProfileClicked(true);
            setTimeout(() => {
                setProfileClicked(false);
            }, 3000);
        });

        return () => {
            window.eventEmitter.removeListener('ProfileSubmit');
        }
    }, []);

    return (
        <div>
            <h1>Container</h1>
            {
                profileClicked ? <h4>Clicked from profile</h4> : null
            }
            <MicroFrontend host="/clientapi/" name="client-page" fname="ClientPage" />
            <MicroFrontend host="/clientapi/" name="client-profile" fname="ClientProfile" />
        </div>
    )
};

export default ClientRoute;