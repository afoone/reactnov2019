import React from 'react'
import axios from 'axios'

class BlogItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: {}
        }

    }

    getData = () => {
        axios.get(`http://localhost:3001/posts/${this.props.match.params.id}/`)
        .then(res => {
            this.setState(
                {
                    item: res.data
                }
            )
        })
    }

    componentDidMount() {
        console.log("mi match", this.props.match);
        this.getData();
    }

    render() {

        // https://semantic-ui.com/views/card.html

        return (
            <div className="blog-item ui container">
                <div className="ui raised centered card">
                    <div className="content">
                        <div className="header">{this.state.item.title}</div>
                        <div className="meta">
        <span className="category">{this.state.item.content}</span>
                        </div>
                        <div className="description">
                            <p></p>
                        </div>
                    </div>
                    <div class="image">
    <img src={this.state.item.image}></img>
  </div>
                    <div className="extra content">
                        <div className="right floated author">
                            {this.state.item.author}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default BlogItem;
