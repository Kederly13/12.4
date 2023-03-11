import { NewsItem } from './components/NewsItem/NewsItem.js';
import { InfoBlock } from './components/NewsItem/components/InfoBlock.js'
import { newsData } from './components/data/newsData.js';

const News = () => (
    newsData.map(({ topic, headline, text, id }) => (
        <InfoBlock
            topic={topic}
            headline={headline}
            text={text}
            key={id}
        />
    ))
);

export { News };    