import React from 'react';

class EstacionCard extends React.Component {

    render(){
        const imagen = (
            this.props.estacion == "verano" ?
            "https://www.consalud.es/uploads/s1/10/30/54/9/playa-libre-sin-humos-foto-freepik.jpeg"
            :
            "https://www.intermundial.es/blog/wp-content/uploads/2016/11/Seguro-de-esqu%C3%AD-y-sus-ventajas-sobre-el-seguro-en-pista-de-la-estaci%C3%B3n.jpg" 

        )

        return (
            <div className="estacion-card">
                <img src={imagen} width="200"></img>
                {this.props.estacion}
            </div>
        )

    }

}

export default EstacionCard;


