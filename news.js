
const moment = require('moment');

news = [
    {
        title: "mulher vence a mega sena",
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        img_url: "https://img.ibxk.com.br/2020/01/30/30021141299110.jpg?w=1120&h=420&mode=crop&scale=both",
        news_redirect: "https://www.hypeness.com.br/2019/05/a-aposta-singela-de-r-350-que-venceu-a-mega-sena-acumulada-de-r-289-milhoes/#:~:text=O%20bilhete%20vencedor%20do%20maior,%E2%80%94%2038%20%E2%80%94%2042%E2%80%93%2049."
    }
]

function createNews(title, img_url, news_redirect) {
    const journal = {
        id: news.length +1,
        title,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        img_url,
        news_redirect,
    }

    news.push(journal)
}



module.exports = {news, createNews}