import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');
    //debouncedText = text to display after the timer goes off
    const[debouncedText, setDebouncedText] = useState(text);

    //when ever text changes run this:
    useEffect(() => {
        //timer:
        const timerId = setTimeout(() => {
            setDebouncedText(text);
            //500mil secs
        }, 500);

        //clean up timer
        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
         //only need data from the response to destructure out data
         const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params:{
                q: debouncedText,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
            },
          }
         );

         //data from axios ... data is also inside of the response from google
         setTranslated(data.data.translations[0].translatedText);

        };
        
        doTranslation();
        //anytime i get a new language or text run this function
    }, [language, debouncedText]);
    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
};
