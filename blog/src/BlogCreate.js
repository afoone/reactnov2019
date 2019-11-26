import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

class BlogCreate extends React.Component {


    // constructor : iniciar el estado
    // title, content, image, author

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            image: "",
            author: "",
            redirect: false
        }

    }


    changeTitle = e => {
        this.setState({
            title: e.target.value,
        })
    }

    changeEverything = e => {
        //e.preventDefault()
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    createBlog = e => {
        console.log(this.state);
        axios.post("http://localhost:3001/posts/", {
            title:this.state.title,
            author: this.state.author,
            image: this.state.image,
            content: this.state.content
        }).then(res => {
            this.setState(
                {
                    redirect: true
                }
            )
        })
    }

    render() {

        // controlar el componente
        // value = this.state
        // onclick tiene que tener su manejador



        return (
            <div className="blog-create ui container">
                {
                    (this.state.redirect ? <Redirect to="/"></Redirect> : null)
                }
                
                <form className="ui form">
                    <h4 className="ui dividing header">Crear nuevo blog</h4>
                    <div className="field">
                        <label>Título</label>
                        <input type="text" name="title" placeholder="Título"
                            value={this.state.title}
                            onChange={this.changeTitle}
                        ></input>
                    </div>
                    <div class="field">
                        <label>Contenido</label>
                        <textarea rows="4" name="content" 
                            value={this.state.content}
                            onChange={this.changeEverything}
                        ></textarea>
                    </div>

                    <div className="field">
                        <label>Imagen (URL)</label>
                        <input type="text" name="image" 
                        value={this.state.image} 
                        onChange={this.changeEverything}
                        placeholder="Imagen"></input>
                    </div>

                    <div className="field">
                        <label>Autor</label>
                        <input type="text" name="author" 
                        value={this.state.author}
                        onChange={this.changeEverything}
                        placeholder="Autor"></input>
                    </div>  
                    
            <div class="ui submit button"
            
            onClick={this.createBlog}>Enviar</div>

                </form>
            </div>
        )
    }
}

export default BlogCreate;


// https://github.com/afoone/reactnov2019