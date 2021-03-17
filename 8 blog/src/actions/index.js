import _ from 'lodash'; //by convention use _ used for memoization 
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers= () => async dispatch => {
    //this action creator will call the other ones 
    await dispatch(fetchPosts()); //when calling action creator inside an action creator dispatch it
    console.log(getState().posts);
    //for each unique id fetch the user
    //lodash is good for finding uniques
    const userIds = _.uniq(_.map(getState().posts, 'userId')); //go thru posts and pull off user id
    console.log(userIds);
    //for ever id fetch user id
    userIds.forEach(id => dispatch(fetchUser(id))); //i dont need to await because im not waiting to do next task
};

//defining a function to return a function
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data})
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
};

/* memoized version
export const fetchUser = (id) => dispatch => {
    _fetchUser(id, dispatch);
};
// _ means private function by convention to other programmers
const _fetchUser = _.memoize(async (id, dispatch) => {
    const reponse = await jsonPlaceholder.get('/users/${id}');

    dispatch({ type: 'FETCH_USER', payload: response.data });
});
*/

 
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
