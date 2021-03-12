import jsonPlaceholder from '../apis/jsonPlaceholder';

//defining a function to return a function
export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response})
};

    //notes:
    //error: actions must be plain objects. use custom middleware for async actions.
    //wrong approach: because im not using redux thunk.
    //return plain js objects (async await in bable makes this more than a plain js object)
    //most popular middleware is redux thunk to help with async action creators

    //normal action creators:
    //must return object
    //actions must have type property
    //actions optionally have a payload

    /*
    const response = await jsonPlaceholder.get('/posts');

    return {
        type: 'FETCH_POSTS',
        payload: response
    };
    */

