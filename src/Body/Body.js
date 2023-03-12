import { NewsSection } from './NewsSection/NewsSection.js';
import classes from './Body.module.css';

const Body = () => (
    <main className={classes.main}>
        <NewsSection/>
    </main>
)

export { Body };