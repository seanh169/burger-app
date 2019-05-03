import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c0f8f.firebaseio.com/'
});

export default instance;