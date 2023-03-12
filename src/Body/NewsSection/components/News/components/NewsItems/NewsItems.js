import { Component } from 'react';
import { InfoBlock } from './components/InfoBlock/InfoBlock.js';

import { newsData } from './data/newsData.js';

import classes from './NewsItems.module.css';

class NewsItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeNewsId: newsData[0].id 
        };
    }

    showDetails = id => {
        this.setState({
            activeNewsId: id
        });
    }

    render() {
        return  ( 
            newsData.map(({ topic, headline, text, id }) => (
                <div key={id} className={classes.newsBlock}>
                    <button onClick={() => this.showDetails(id)}>Show {topic} News</button>
                    {this.state.activeNewsId === id ? <InfoBlock headline={headline} text={text}/> : null}
                </div>
            ))
        )
    }
}
export { NewsItems };  


  