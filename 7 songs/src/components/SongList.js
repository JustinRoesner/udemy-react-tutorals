import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component{
    //helper method
    renderList(){
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                          className="ui button primary" 
                          onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render(){
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}
//each time redux change happens this will rerun with newly created state object
const mapStateToProps = (state) =>{
    return { songs: state.songs };
};

//es15 since {selectSong: selectSong} are the same word can shorten to {selectSong}
//how to configure connect 

//when pass action creator to connect function. 
//connector wraps them in js function to call dispatch for me.
export default connect(mapStateToProps, { selectSong })(SongList);