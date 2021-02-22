import React from 'react';
//usually goes above files i create by convention
//import axios from 'axios';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    //default to be empty array since i expect and array
    state = { images: [] };
    //allows asynt await keyword
    onSearchSubmit = async term => {
        //looked inside location for first part
        //authorization for second part
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        //axios will return a promise lets us know when work is finished
        //chaining on a .then statement anytime im using a promise
        });

        this.setState({ images: response.data.results });
    }
    render(){
        return ( 
         //container so it doesnt span whole page.
        <div className="ui container" style={{ marginTop: '10px' }}>
          <SearchBar onSubmit={this.onSearchSubmit}/>
          Found: {this.state.images.length} images
          <ImageList images={this.state.images} />
        </div>
    );
    }
}

export default App;