//config for axios
//customized instance
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
      Authorization: 
        'Client-ID 2EPGafVt-1hMI4MfUi5KiRaWBKUnlmYC4GjLnTTew_8',
    },
});