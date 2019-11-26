import React, { Component } from 'react';
import {MemoryRouter as Router, Route, Link} from 'react-router-dom'


const Home = () => {
    return (<div>
        Home<br></br>
        <Link to="/hello">hello</Link>
        </div>)
}

const Hello = () => {
    return (<div>
        Hello<br></br>
        <Link to="/">home</Link>
        </div>)
}

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path = "/" component = {Home}></Route>
                <Route exact path = "/hello" component = {Hello}></Route>
            </Router>
        );
    }
}

export default App;