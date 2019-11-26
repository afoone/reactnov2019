import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class BlogList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            error: "",
            message:""
        }
    }


    getData =() => {
        axios.get("http://localhost:3001/posts").then(
            res => {
                this.setState({
                    blogs: res.data
                })
            }
        ).catch((err) => {
            console.log("ha fallado");
            this.setState(
                {
                    error: "No se han podido recuperar los posts"
                }
            )
        }
        )
    }

    componentDidMount() {
       this.getData()
    }

    borrar = (id) => {
        axios.delete(`http://localhost:3001/posts/${id}`).then(
            res => {
                this.setState(
                    {
                        message: "Mensaje borrado correctamente",
                        blogs: this.state.blogs.filter(i => i.id !== id)
                    }
                )
                
            }
        )
    }

    render() {

        const errorMessage = (
            <div class="ui negative message">
                <i class="close icon"></i>
                <div class="header">
                    Error
  </div>
                <p>{this.state.error}
                </p></div>
        )

        const message = (
            <div class="ui positive message">
                <i class="close icon"></i>
                <div class="header">
                    Borrado
                </div>
                <p>{this.state.message}
                </p></div>
        )

        return (
            <div className="blog-list">

                {this.state.error ? errorMessage : null}
                {this.state.message ? message: null}

                <table class="ui striped table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Autor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.blogs.map(
                                (item) => (
                                    <tr key={`row-${item.id}`}>
                                        <td>
                                            <Link to={`/blog/${item.id}/`}>
                                                {item.title}
                                            </Link>
                                        </td>
                                        <td>{item.author}</td>
                                        <button class="negative ui button"
                                            onClick={() => this.borrar(item.id)} >Borrar</button>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}

export default BlogList;