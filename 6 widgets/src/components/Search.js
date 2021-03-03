import React, { useEffect, useState } from 'react';
import axios from 'axios';

//USE EFFECT!
const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    console.log('I RUN WITH EVERY RENDER');
    
    console.log(results);

    //first argument will be a function in this case i used an arrow func.
    useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    //check if this is the first term to be rendered
    //so i can render without wait
    if (term && !results.length){
        search();
    }
    else{
        const timeoutId = setTimeout(()=> {
            //this fixes the bug when i delete the entire search term
         if (term){
            search();
         }
        }, 500); //wait 500miliseconds 

        return () => {
         clearTimeout(timeoutId);
        };
    }



    }, [term]);

        //promises are least often used (3)

        //not allowed to mark useEffect arrow function as async
        //1. inside use effect make temp helper function
        /*
        const search = async () => {
            await axios.get('asdf');
        };
        search();
        */

        //2. this defines a function and immediately invokes it
        //this approach if it is easier to read
        /*
        (async () => {
            await axios.get('asdf');
        })();
        */

        //3. use a normal promise
        /*
        axios.get('asdf')
            .then((response) => {
                console.log(response.data);
            });
        */

        //will usually see empty array or array with something inside it
        //console.log('I ONLY RUN ONCE'); if i used , []); at end of useEffect
        //console.log('I RUN ONCE after every render and at initial render') with blank at end of useEffect not very common;

        //will run after initial and when term changes inside array
        //if more than one variable in array then when either changes will trigger 
        //console.log('I RUN when term changes and at initial render'); 

        //second arg blank, empty array, or array with one or more elements.
        //

        const renderedResults = results.map((result) => {
            return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {/* dangerous because possible security hole */}
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
            );
        });

        //to get rid of span elements 
        //
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                    value={term}
                    onChange={(e) => setTerm (e.target.value)}
                    className="input" />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

export default Search;