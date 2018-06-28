/**
 * Created by rozer on 6/21/2018.
 */

const API_KEY = '0df45608893f4cb3a63ebe75ac765b7e';

export function fetchNews() {
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
        .then((res) => res.json())
}

export const searchNews = (keyword = '',date='') =>{
    return fetch(`https://newsapi.org/v2/everything?q=${keyword}&from=${date}&sortBy=popularity&apiKey=${API_KEY}`)
        .then((res) => res.json())
};

export const categoryNews = (category = '') =>{
        return fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`)
            .then((res) => res.json())
};

export const topics = [
    {
        "name":"fifa2018",
        "url":require("../icons/icons/worldcup.png"),
        "keyword":"football"
    },
    {
        "name":"india",
        "url":require("../icons/icons/india.png"),
        "keyword":"health"
    },
    {
        "name":"politics",
        "url":require("../icons/icons/parliament.png"),
        "keyword":"politics"
    },
    {
        "name":"sports",
        "url":require("../icons/icons/olympicrings.png"),
        "keyword":"sports"
    },
    {
        "name":"business",
        "url":require("../icons/icons/business.png"),
        "keyword":"business"
    },
    {
        "name":"technology",
        "url":require("../icons/icons/roboty.png"),
        "keyword":"technology"
    },
    {
        "name":"science",
        "url":require("../icons/icons/microscope.png"),
        "keyword":"science"
    },
    {
        "name":"entertainment",
        "url":require("../icons/icons/tango.png"),
        "keyword":"entertainment"
    }
]
