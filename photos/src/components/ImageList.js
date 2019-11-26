import React from 'react';
import Image from './Image';
import {ACCESS_KEY, SECRET_KEY} from '../settings'
import axios from 'axios';

export default class ImageList extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            images: []
        }
    }

    componentDidMount(){
       this.getData();
    }

    componentWillReceiveProps(nexprops){
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${nexprops.query}&client_id=${ACCESS_KEY}&client_secret=${SECRET_KEY}`).then(
            res => {
                this.setState( {
                    images: res.data.results
                })
            }
        )
    }


    getData = ()=>{
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${this.props.query}&client_id=${ACCESS_KEY}&client_secret=${SECRET_KEY}`).then(
            res => {
                this.setState( {
                    images: res.data.results
                })
            }
        )
    }



    render() {
        return (
            <div className="image-list">
                {
                    this.state.images.map(
                        e => <Image key={e.id} image={e.urls.small}></Image>
                    )
                }
            </div>
        )
    }
}

