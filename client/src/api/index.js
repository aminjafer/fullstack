import axios from 'axios';

const url = 'http://localhost:5063/posts';

export const fetchPosts = () => axios.get(url);