import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

//call action creator to fetch user data

class UserHeader extends React.Component {
    //call action creator here
    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }
    render(){
        //this.props.user deconstruct user from props
        const { user } = this.props;

        if (!user){
            return null;
        }

        return <div className="header">{user.name}</div>;
    }
}

//mapstatetoprops function to get info from reducer also connect mapstatetoprops at the bottom
//ownProps is built in to allow me to see props inside of mapstatetoprops
const mapStateToProps = (state, ownProps) => {
    //find is built in method for javascript arrays
    return { user: state.users.find(user => user.id === ownProps.userId) };
};



export default connect(mapStateToProps, { fetchUser })(UserHeader);