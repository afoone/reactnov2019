import React from 'react';
import EstacionCard from './EstacionCard';

class Estaciones extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            estacion: "desconocida"
        }
    }


    componentDidMount() {
         navigator.geolocation.getCurrentPosition(this.getPosition,(e)=> console.log(e));
        //const latitude = position.coords;
       // console.log("latitud",position);
    }

    getPosition = (position) => {
        const latitud = position.coords.latitude;
       const month = (new Date()).getMonth();
       

         if ((latitud>0 && month>4 && month<10)
            || (latitud<0 && (month<=4 || month>=10))) {
             this.setState({
                estacion: "verano"
             });
         } else {
            this.setState({
                estacion: "invierno"
             });
         }

         console.log(this.state.estacion);

    }
    

    render() {
        return <EstacionCard estacion = {this.state.estacion}></EstacionCard>
    }




}

export default Estaciones;