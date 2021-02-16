import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//going to use geolocation api to find user's location to find if they are in winter or summer.

class App extends (React.Component){
    
    /*
    //called when instance of this class is called
    constructor(props){
        super(props); //ensures parents constructor still gets called will always use this

        //only time to do direct assignment. otherwise i should use this.setState
        this.state = { lat: null, errorMessage: ''}; //initialize state using latitude and defulting it to null
    }
    */

    state = { lat: null, errorMessage:'' };

    //only gets called one time
    //best practice to do all data loading inside here
    componentDidMount() {
        console.log('My component was rendered to the screen.');

        window.navigator.geolocation.getCurrentPosition(
         //successful callback
         //this is a callback function that will get called eventually after the constructor finishes
         //called set state here.
         position =>this.setState({ lat: position.coords.latitude }),
         //err => console.log(err) //failure callback
         err => this.setState({ errorMessage: err.message})
        );

    }

    //gets called when rerendered
    //good place to put more data loading when a button click
    componentDidUpdate() {
        console.log('My component was just updated and was rerendered.');
    }

    /*
    //when component is nolonger shown
    componentWillUnmount(){

    }
    */

    renderContent(){
            //moved these here so we didnt have multiple returned statements inside render
            if(this.state.errorMessage && !this.state.lat){
                return <div>Error: {this.state.errorMessage}</div>
            }
            if(!this.state.errorMessage && this.state.lat){
                //passing state as a prop to SeasonDisplay
                return <SeasonDisplay lat={this.state.lat} />
            }
            return <Spinner message="Please accept location request"/>;
            //return <Spinner message="Please accept location request"/>;
            /*
          <div>
              Latitude: {this.state.lat}
              <br />
              Error: {this.state.errorMessage}
          </div>
          */

    }

    //always need a render function it get called often
    render(){
        //any time from single line to multi line move semi colon down to second parenthisis
        return(
            //not a real border but shows how i can avoid wrapping all the conditional returns from before
            <div className="border red">  
                {this.renderContent()}
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.querySelector('#root'));