import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);

        this.state = { spans: 0 };

        //this is how i create a reference. 
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        //refactor so i can see the height only after the image has loaded
        //console.log(this.imageRef.current.clientHeight);

        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    //call back to event listener need to be bound to make it not undefined
    //so need to set it up as an arrow function
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        //add one incase there is a portion of a row to make sure 
        //if i have a portion of a row it will go up to the next highest row
        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    }

    render(){
        const { description, urls } = this.props.image;
        return(
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                    //ref is a jsx tag
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular} 
                />
            </div>
        );
    }
}

export default ImageCard;