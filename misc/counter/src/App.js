import React, { useEffect, useState } from 'react';
import axios from "axios";


const fetchRandomColorData = () => {

  const colorUrl = "https://www.colr.org/json/color/random";

  console.log("test");

  axios.get(colorUrl)
    .then((response) => {
      // handle success
      console.log(response);
      return JSON.stringify(response.data.colors[0].hex);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}


function App() {

  const [count, setCount] = useState(0);
  const [colorString, setColorString] = useState('');

  useEffect(() => {
    //colors[0].hex
    axios.get("https://www.colr.org/json/color/random").then((response) => {
      setColorString(JSON.stringify(response.data.colors[0].hex));
      //setColorString(response.data);
    })
    //fetchRandomColorData().then(randomColor => {
    //setColorString(randomColor || 'failed to load');
  }, []);

  return (
    <div className="App">
      hello world
      <br />
      <p>{count}</p>
      <p>{colorString}</p>
      <button onClick={() => { setCount(count + 1) }}>Increase Count</button>
      <button onClick={() => { setColorString(fetchRandomColorData()); }}>Random Color</button>
    </div >
  );
}

export default App;
