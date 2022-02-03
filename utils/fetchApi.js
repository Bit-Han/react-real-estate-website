import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'f7c7ca87d3msh75b5659768e0938p1cecd4jsn2b3fee411e3b'
        },
    });
    return data;
}