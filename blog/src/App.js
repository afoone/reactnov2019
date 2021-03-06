import React from 'react';
// npm install -s react-router-dom
import { BrowserRouter as Router, Route } from 'react-router-dom'

// crear Home
// importar Home
import Home from './Home'
// importar BlogList
import BlogList from './BlogList'

// importar blogcreate
import BlogCreate from './BlogCreate'

// importar blogitem

import BlogItem from './BlogItem'




const App = () => {

    return (
        // Poner el router
        <Router>
            {/*  Crear la ruta a Home */}
            <Route exact path="/" component={Home}></Route>
            {/* Crear la ruta a BlogList /blog */}
            <Route exact path="/blog" component={BlogList}></Route>

            {/* Crear la ruta a Blog Create en /blog/create */}
            <Route exact path="/blog/create" component={BlogCreate}></Route>

            {/* Crear la ruta al blog item */}
            <Route exact path="/blog/:id/" component={BlogItem}></Route>
        </Router>



    )
}

export default App;


