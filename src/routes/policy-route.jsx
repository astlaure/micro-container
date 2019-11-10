import React from 'react';
import MicroFrontend from "../components/micro-frontend";

const PolicyRoute = () => {
    return (
        <div>
            <h1>Container Policy Route</h1>
            <MicroFrontend host="/policyapi/" name="policy-page" fname="PolicyPage" />
        </div>
    )
};

export default PolicyRoute;