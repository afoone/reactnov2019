import React from 'react';

// importar Link desde react-router-dom
import { Link } from 'react-router-dom'



const Home = () => {

    return (
        <div className="home">
            {/* header mi aplicacion blog */}
            <h3 className="ui block header">
Mi blog</h3> {/* Poner el link a /blog */}
            <div className="ui list">
                <div className="item"><Link to="/blog">Ver los blogs</Link></div>
                <div className="item"><Link to="/blog/create">Crear nuevo blog</Link></div>

            </div>

            {/* Poner enlace a blog create */}
           

        </div>
    )
}

export default Home;