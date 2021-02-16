import React from 'react';

    //{props.message || 'Loading...'}
const Spinner = props => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
};

//this default gets overridden since im setting a message prop
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;