export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
    /*
    if (action.type === "FETCH_POSTS"){
        return action.payload;
    }
    return state;
    */

    /*
    must return any value besides undefined... null still works.
    projduces state or data only using previous state and the action
    the action doesnt reach 'out of itself' to determine new value
    must not mutate its input state argument = changing contents of an array is an example
    */
};