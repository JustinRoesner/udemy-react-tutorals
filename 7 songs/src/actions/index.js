//name it index as a pattern
//import actions from '../actions';     this is a shortcut will
//                                       auto load this file

//action creator
export const selectSong = (song) =>{
    //return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

//named export allows many different functions from a single file
//import { selectSong } from '../actions';