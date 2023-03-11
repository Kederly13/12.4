import { Component } from 'react';
import { InfoBlock } from './components/InfoBlock';


class NewsItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newsActive : false
        };
    }

    showNews = () => {
        this.setState({ 
            newsActive : !this.state.newsActive
        })
    };

    render() {
        
        return (
            <div>
                <button onClick={this.showNews}>Click me</button>
                {this.state.newsActive ? <InfoBlock/> : null}
            </div>
        );       
    }
}


export { NewsItem };