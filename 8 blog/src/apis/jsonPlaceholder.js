import axios from 'axios';

export default axios.create({
    //i dont include /posts end point so i can specify /posts or /users 
    baseURL: 'https://jsonplaceholder.typicode.com'
});