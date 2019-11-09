import React, { useEffect } from 'react';

const MicroFrontend = (props) => {
    const { host, name, fname } = props;

    const scriptId = `microfrontend-${name}`;

    const mountMicroFrontend = () => {
        window[`mount${fname}`](`${name}-container`);
    };

    const unmountMicroFrontend = () => {
        window[`unmount${fname}`](`${name}-container`);
    };

    useEffect(() => {
        if (document.getElementById(scriptId)) {
            mountMicroFrontend();
            return unmountMicroFrontend; // INFO not 100% needed
        } else {
            fetch(`${host}/manifest.json`)
                .then(res => res.json())
                .then(manifest => {
                    const script = document.createElement('script');
                    script.id = scriptId;
                    script.crossOrigin = '';
                    script.src = `${host}${manifest[`${name}.js`]}`;
                    script.onload = mountMicroFrontend;
                    document.head.appendChild(script);
                });
        }

        return unmountMicroFrontend; // INFO not 100% needed
    }, []);

    return (
        <div id={`${name}-container`} />
    )
};

export default MicroFrontend;