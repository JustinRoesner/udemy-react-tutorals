 // Import the React and ReactDOM libraries
 //React and ReactDOM are variables
 //import vs require. es2015 syntax uses import. 
 import React from 'react';
 import ReactDOM from 'react-dom';

 // Create a react component
 //const App = function() {      instead of function() it can be rewritten as () =>
 /*
 function getButtonText(){
   return 'Click on me';
 }
 */
 const App = () => {
   const buttonText = { text: 'Click me' }; //this is now a javascript object
     // used htmlFor instead of for because it throws an error in browser console /
     return (
      <div>
        <label className="label" htmlFor="name">Enter name:</label> 
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'blue', color: 'white'}}>
          {buttonText.text}
        </button>
      </div>
     )
 };

 // Take the react component and show it on the screen
 ReactDOM.render(
   <App />,
   document.querySelector('#root')
 );
 

 /*
 //// this is a work around to enable reloading if it doesnt work
 if (module.hot){
     module.hot.accept();
 }
 */