import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }
    }

    handleSearchOnChange = (e) => {
        console.log(e.target.value);
        this.setState({
            query: e.target.value
        })
    }




    render() {

        return (
            <div>
                <div className="ui icon input">
                    <input type="text" placeholder="Search..."
                        value={this.state.query}
                        onChange={this.handleSearchOnChange} ></input>
                    <i className="search icon"></i>
                </div>
                <button class="ui primary button" 
                   onClick={()=>this.props.search(this.state.query)} >
                    Buscar
                </button>
            </div>
        )
    }
}

export default SearchBar;