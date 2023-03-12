import { NewsItems } from './components/NewsItems/NewsItems.js';

import classes from './News.module.css';

const News = () => (
    <div className={classes.News}>
        <NewsItems/>
    </div>
)


export { News };