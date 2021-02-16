import './SeasonDisplay.css';
import React from 'react';

//configuration object
const seasonConfig = {
    summer: {
        text: "Phew, it's a hot summer!",
        iconName: 'sun'
    },
    winter: {
        text: "Burr, it's winter!",
        iconName: 'snowflake'
    }

};

//find what month
const getSeason = (lat, month) => {
    //northern hemisphere 3-8th month are summer 9-2 are winter
    //sothern hemisphere 3-8th month are winter 9-2 are summer 
    if (month > 2 && month < 9){
        //use javascript turinary expression
        //if lat is > 0 then return summer otherwise return winter.
        return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) =>{
    const season = getSeason(props.lat, new Date().getMonth());
    console.log(season);
    //const output = season === 'winter' ? 'Burr, it is winter!' : 'Phew, its a hot summer!';
    //const icon = season === 'winter' ? 'snowflake' : 'sun';
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;