import axios from 'axios';

const instance =  axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
         'Bearer 0hMzZOzXz3bRwjZyinozn5nE_jqt_UNS0c1sn0On7UaMEQu7hFg_LIDc8QAmzNw0wieWgxFaU7DtSP4EytWIOARYWe4S4t6ncDvXDj5ZDSefFqJ1H4yBkASX4B5SX3Yx'
    }
});

export default instance;