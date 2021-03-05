import React from 'react';

//now that im using link i can use click even handler and custom logic to these links
const Link = ({ className, href, children }) => {
    //helper function onclick
    const onClick = (event) =>{
        //if mac meta (command key) or ctrl key held down while clicking a link
        //open link in new tab
        if (event.metaKey || event.ctrlKey){
            return;
            //my returning before the code below allows browser to do its normal function
            //of opening the link in new tab
        }
        
        //stop page from refreshing
        event.preventDefault();
        //update the url
        window.history.pushState({}, '', href);

        //navigation event to trigger routing
        //this will tell the route components that the url has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);

    };
    return <a onClick={onClick} className={className} href={href}>{children}</a>;
};

export default Link;