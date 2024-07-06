import { create } from "apisauce";


const api = create({
    baseURL: 'https://newsapi.org/v2',
})
const apiKey = '?country=us&apiKey=82fb8c87ac044eaeaa2aa30707e6f31f';

const getTopHeadline = api.get('/top-headlines' + apiKey)
const getByCategory = (category) => api.get('/everything?q='+category+"&apiKey=82fb8c87ac044eaeaa2aa30707e6f31f")

export default{
    getTopHeadline,
    getByCategory
}

// https://newsapi.org/v2/top-headlines?country=us&apiKey=82fb8c87ac044eaeaa2aa30707e6f31f