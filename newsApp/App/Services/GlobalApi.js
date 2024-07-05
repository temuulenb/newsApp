import { create } from "apisauce";


const api = create({
    baseURL: 'https://newsapi.org/v2',
})
const apiKey = '?country=us&apiKey=82fb8c87ac044eaeaa2aa30707e6f31f';

const getTopHeadline = api.get('/top-headlines' + apiKey)

export default{
    getTopHeadline
}

// https://newsapi.org/v2/top-headlines?country=us&apiKey=82fb8c87ac044eaeaa2aa30707e6f31f