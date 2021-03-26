import { combineReducers } from 'redux';
//as formReducer just renames for inside this file
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer
});
