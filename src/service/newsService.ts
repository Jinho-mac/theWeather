import axios from "axios";
import { NewsItemInterface } from "../interfaces/newsInterface";

class NewsService {
  async getNews() {
    const response = await axios({
      method: 'GET',
      url: 'https://newsapi.org/v2/everything',
      params: {
        apiKey: '64e3b3ef0829493e93977014ce8e1c64',
        q: '날씨',
        sortBy: 'publishedAt'
      }
    });
    const articles: NewsItemInterface[] = response.data.articles;
    return articles;
  }
}

export default NewsService;