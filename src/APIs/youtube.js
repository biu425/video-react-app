import axios from 'axios';

const KEY = 'AIzaSyDosuC7P3cZTTrt7tDiK4a4CwnpNOXGf5g';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

