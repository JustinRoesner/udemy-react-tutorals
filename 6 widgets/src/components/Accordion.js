import React, { useState } from 'react';

/*          if it was class function
class Accordion extends Component {
    onTitleClick(){
        console.log('title was clicked');
    }

    render(){

    }
}
*/

const Accordion = ({ items }) => {
    // array destructuring... short cut to give access to elements in an array
    //activeIndex is the current clicked on item
    //setActiveIndex is what i call to update state
    //useState takes in one argument the default state
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        //console.log('Title clicked', index);

        //when ever a set gets called the useState null default doesnt get
        //used any more and the entire function rerenders 
    
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            //use react fragment so i dont have two lines at top
            //instead of a div
        <React.Fragment key={item.title}>
            <div 
                className={`title ${active}`}
                onClick={() => onTitleClick(index)}
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
        <div className={`content ${active}`}>
            <p>{item.content}</p>
        </div>
        </React.Fragment>
        );
    });
    return <div className="ui styled accordion">
        {renderedItems}
    </div>
};

export default Accordion;