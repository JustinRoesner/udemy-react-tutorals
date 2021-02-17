import React from 'react';
import SearchBar from './SearchBar';

const App = () =>{
    return ( 
        //container so it doesnt span whole page.
    <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar/>
    </div>
    );
};

export default App;