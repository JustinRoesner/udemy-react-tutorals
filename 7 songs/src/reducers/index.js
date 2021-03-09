//curly braces here i know via documentation
import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I Want it That Way', duration: '1:45' }
    ];
};

//default to null. when app first starts i wont have a slecected song
const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type ==='SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};


//accessable keys via state.songs and state.selecedSong
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});