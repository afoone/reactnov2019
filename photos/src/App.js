import React from 'react';
import ImageList from './components/ImageList'
import SearchBar from './components/SearchBar'

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            query: ""
        }
    }

    changeQuery = (query)=> {
        console.log("query", query);
        this.setState({
            query: query
        })
        console.log("state query", this.state.query);
    }

    render() {

        const {query} = this.state;
        console.log("render "+query);
        return (
            <div className="app">
                <SearchBar search={this.changeQuery}></SearchBar>
                <ImageList query={query}></ImageList>
            </div>
        )
    }
}

export default App;