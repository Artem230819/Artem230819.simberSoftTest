import React, {Component} from 'react';
import c from './Content.module.css';
import * as axios from "axios";

export class Content extends Component{

    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${this.props.zip}/`).then(response => {
            this.setState(response.data);
        })
    }

    render() {
        console.log(this.state)
        const consolidated_weather = this.state.consolidated_weather;
        if (!consolidated_weather) return <div>Loading</div>;
        const weather = consolidated_weather[0];
        const iconUrl = 'https://www.metaweather.com/static/img/weather/' + weather.weather_state_abbr + '.svg';
            return (<>
                    <div>
                        <h1>
                            {weather.weather_state_name}
                            <img src={iconUrl} className={c.img}/>
                        </h1>
                        <p>Current: {weather.the_temp}°</p>
                        <p>High: {weather.max_temp}°</p>
                        <p>Low: {weather.min_temp}°</p>
                        <p>Wind Speed: {weather.wind_speed}</p>
                    </div>
                </>
            )
        }
}


