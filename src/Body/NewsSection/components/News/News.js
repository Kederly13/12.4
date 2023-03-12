import { Component } from 'react';
import { NewsItems } from './components/NewsItems/NewsItems.js';


class News extends Component {
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
                {this.state.newsActive ? <NewsItems/> : null}
                
            </div>
        );       
    }
}


export { News };