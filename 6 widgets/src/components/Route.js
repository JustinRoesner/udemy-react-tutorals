//using useEffect hook to listen for navEvent
import { useEffect, useState } from 'react';
//no jsx so i dont need to import react
//import React from 'react';

const Route = ({ path, children }) => {
    //this state exists to get route to update
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);

            //prints 4 times because i have 4 items listening for routing
            //console.log('Location Change');
        };

        window.addEventListener('popstate', onLocationChange);
        //run one time to set up listener

        //if i decide to remove route component from screen here is clean up
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    //show child or hide it
    return currentPath === path
        ? children
        : null;
};

export default Route;