import React from 'react';
import MicroFrontend from "../components/micro-frontend";

const ClientRoute = () => {
    return (
        <div>
            <h1>Container</h1>
            <MicroFrontend host="http://localhost:3001/" name="client-page" fname="ClientPage" />
            <MicroFrontend host="http://localhost:3001/" name="client-profile" fname="ClientProfile" />
        </div>
    )
};

export default ClientRoute;