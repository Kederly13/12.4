import classes from './InfoBlock.module.css'


const InfoBlock = ({ topic, headline, text}) => (
    <div className='NewsItem'>
        <h2 className={classes.topic}>{topic}</h2>
        <h3 className={classes.headline}>{headline}</h3>
        <p className={classes.text}>{text}</p>
    </div>
)

export { InfoBlock };