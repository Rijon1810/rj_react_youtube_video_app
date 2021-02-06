import axios from 'axios';
const KEY = 'AIzaSyAk5OigOJ4U_WARluZI7akIMau7Po9W4LY';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
})