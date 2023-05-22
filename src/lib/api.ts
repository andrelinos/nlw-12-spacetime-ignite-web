import axios from 'axios';

export const api = axios.create({
  baseURL:
    `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_IP_ADDRESS}:${process.env.NEXT_PUBLIC_PORT}` ||
    'http://localhost:3333',
});
