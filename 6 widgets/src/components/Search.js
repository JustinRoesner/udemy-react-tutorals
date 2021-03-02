import React, { useEffect, useState } from 'react';

const Search = () => {
    const [term, setTerm] = useState('');

    //first argument will be a function in this case i used an arrow func.
    useEffect(() => {
        console.log('okokok');
        //second arg blank, empty array, or array with one or more elements.
        //
    }, [term]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                    value={term}
                    onChange={(e) => setTerm (e.target.value)}
                    className="input" />
                </div>
            </div>
        </div>
    );
};

export default Search;