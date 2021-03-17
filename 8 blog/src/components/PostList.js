import React from 'react';

//to connect to action creator :
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";

import UserHeader from './UserHeader';

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


//when i need data from redux mapstatetoprops and connect at bottom
const mapStateToProps = (state) =>{
    return { posts : state.posts };
}

class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPostsAndUsers();
    }
    //helper method to keep render easier to read
    renderList(){
        return this.props.post.map(post => {
            return(
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            );
        });
    }
    render () {
        return <div className="ui realaxed divided list">{this.renderList()}</div>;
    }
}

//currently no mapstatetoprops so im passing null for now
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);