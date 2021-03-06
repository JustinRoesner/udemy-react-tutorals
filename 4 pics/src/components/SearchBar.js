import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    //very common to write this so that the default html form doesnt 
    //refresh the whole page when i hit enter
    onFormSubmit = (event) => {
        event.preventDefault();

        //this will crash because value of this is 
        //the value to left of dot when this function is called

        this.props.onSubmit(this.state.term);
    };

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                          type="text" 
                          value={this.state.term} 
                          onChange={e => this.setState({ term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;