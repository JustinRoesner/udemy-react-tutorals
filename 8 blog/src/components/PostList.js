import React from 'react';

//to connect to action creator :
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

//because im using json i made this a class based component
//i will call componentDidMount and it will action creator from there
//action creator runs code to make an api request
//api will come back with data then action creator will 
//return an action. the action is the data.
//data will get sent to reducer.
//reducer is looking for the action and take the data from payload
//page is rerendered

//1. components are in charge for fetching data they need by calling action creators usually from componentDidMount
//2. action creators are responsible for making api requests. (redux-thunk)
//3. fetched data first goes to store. then component gets that data by mapStateToProps.

class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPosts();
    }

    render () {
        return <div> Post List</div>;
    }
}

//currently no mapstatetoprops so im passing null for now
export default connect(null, { fetchPosts })(PostList);