const http = new CustomHttp();

class NewsService {
    constructor() {
        this.apiUrl = 'https://newsapi.org/v2';
        this.apiKey = '9c27b0f722b84da5a08312d2b125351b';
        this.country = 'ua';
        this.category = 'technology';
    }

    /**
     * Get all news
     */
    getTopHeadlinesNews(callback, category = this.category, country = this.country) {
        http.CustomHttp(`${this.apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}`).then(callback)
        .catch(() => console.log(error));;
    }
}