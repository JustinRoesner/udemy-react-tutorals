import React from 'react';
import { connect } from 'react-redux';

//functional component or class works with reactredux
//now getting props object that has currently selected song with connect wired
//destructure out the song from props
const SongDetail = ({ song }) => {
    if (!song){
        return <div>Select a song</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}
                <br />
                Duration: {song.duration}
            </p>
        </div>
    );
};

//wrap songdetail in connect component so i can get info from redux store
const mapStateToProps = (state) => {
    //
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);