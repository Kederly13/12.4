import { InfoBlock } from './components/InfoBlock/InfoBlock.js';
import { newsData } from './data/newsData.js';

const NewsItems = () => (
    newsData.map(({ topic, headline, text, id }) => (
        <InfoBlock
            topic={topic}
            headline={headline}
            text={text}
            key={id}
        />
    ))
);

export { NewsItems };    