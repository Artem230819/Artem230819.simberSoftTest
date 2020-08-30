import React, {Component} from 'react';
import c from './Header.module.css';
import {Content} from "../Content/Content";

 class Header extends Component{
    constructor() {
        super();
        this.state = {
            activePlace: 0,
        };
    }

    render() {
        const activePlace = this.state.activePlace;
        return (
            <div className="App">
                {PLACES.map((place, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            this.setState({ activePlace: index });
                        }}
                    >
                        {place.name}
                    </button>
                ))}
                <Content
                    key={activePlace}
                    zip={PLACES[activePlace].zip}
                    gettingWeather={this.gettingWeather}
                />
            </div>
        );
    }
}
connect(mapStateToProps, mapDispatchToProps)(MyPosts)

