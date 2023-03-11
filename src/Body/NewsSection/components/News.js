import { NewsItem } from './components/NewsItem.js';
import { NewsData } from '../data/newsData.js';

const News = () => (
    NewsData.map(({ topic, headline, text}) => (
        <NewsItem
            topic = {topic}
            headline = {headline}
            text = {headline}
        />
    ))
)

export { News };