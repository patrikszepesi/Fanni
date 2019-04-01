import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID f73e545458bb44abebae2aa5be5beb9f3dda3be34161172d880a73af3d768931 '
  }
});
