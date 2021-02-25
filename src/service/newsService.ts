import axios from "axios";
import { NewsItemInterface } from "../interfaces/newsInterface";

class NewsService {
  async getNews() {
    const response = await axios({
      method: 'GET',
      url: 'https://newsapi.org/v2/everything',
      params: {
        apiKey: '049f1a885ae84e8fa57700f460c6121a',
        q: '날씨',
        sortBy: 'publishedAt'
      }
    });
    const articles: NewsItemInterface[] = response.data.articles;
    return articles;
  }
}

export default NewsService;