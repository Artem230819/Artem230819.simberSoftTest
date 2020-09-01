import React, {Component} from 'react';
import c from './Content.module.css';
import * as axios from "axios";


const URL = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/'

export class Content extends Component{

    constructor() {
        super();
        this.state = {
            weatherData: null
        }
    }

    componentDidMount() {
    axios.get(`${URL}${this.props.zip}/`).then(response => {
            this.setState(response.data);
        })
    }

    render() {
        const consolidated_weather = this.state.consolidated_weather;
        if (!consolidated_weather) return <div>Loading</div>;
        const weather = consolidated_weather[0];
        const {weather_state_name ,the_temp, max_temp, min_temp, wind_speed} = weather;
        const iconUrl = `https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`;
            return (<>
                        <h1>
                            {weather_state_name}
                            <img src={iconUrl} className={c.img}/>
                        </h1>
                        <p>Current: {the_temp}°</p>
                        <p>High: {max_temp}°</p>
                        <p>Low: {min_temp}°</p>
                        <p>Wind Speed: {wind_speed}</p>
                </>
            )
        }
}


