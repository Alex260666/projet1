import React, { Component } from 'react';
import Recherche from './Recherche';

class Meteo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            baseUrl : 'https://api.openweathermap.org/data/2.5/weather?q=',
            ApiKey : 'd803cb20c3fe8bceab994217320ce0bc',
            req : 'Paris',
            meteoData : ''
         }
    }

    componentDidMount(){
        this.requete();
    }
     requete = () => {
         //e.preventDefault();
        let url = this.state.baseUrl + this.state.req +'&appid=' + this.state.ApiKey;
       
        fetch(url)
        .then(response => {
            if(response.ok){
                console.log('succes');
                return response.json()
            }
        })
        .then(data => {
            //console.log(data);
            let description = data.weather[0].description
            let temp = data.main.temp
            let icon = data.weather[0].icon
            let code = data.sys.country.toLowerCase()
            let city = data.name

            let donnees = {temp: temp, icon:icon,code:code,city:city,description:description}
            this.setState({meteoData: donnees});
            console.log(this.state.meteoData);

        })
    }
    recup = (e)=>{
        this.setState({req: e.target.value})
    }
    render() { 
        const {temp,code,city,icon,description} = this.state.meteoData;
        return ( 
            <div>
                <Recherche recup = {this.recup} requete = {this.requete} req ={this.req}/>
            <h1>{city} <img src={'https://www.countryflags.io/'+ code + '/flat/64.png'} alt=""/></h1>
            <p>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
            </p>
            <p>{(temp - 273.15).toFixed(0)}°</p>
            <p>{description}</p>
   </div>
         );
    }
}
 
export default Meteo;