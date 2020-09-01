import React, {Component} from 'react';
import './App.css';
import {Content} from "./component/Content/Content";

const PLACES = [
    { name: "Moscow", zip: "2122265" },
    { name: "London", zip: "44418" },
    { name: "San Francisco", zip: "2487956" },
    { name: "St Petersburg", zip: "2123260" }
];

class App extends Component {
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
                            this.setState({ activePlace: index});
                        }}
                    >
                        {place.name}
                    </button>
                ))}
                <Content
                    key={activePlace}
                    zip={PLACES[activePlace].zip}
                />
            </div>
        );
    }
}
    // <div className="App">
    //     {PLACES.map((place, index) => (
    //         <button
    //             key={index}
    //             onClick={() => {
    //                 this.setState({ activePlace: index });
    //             }}
    //         >
    //             {place.name}
    //         </button>
    //     ))}
    //     <Content
    //         key={activePlace}
    //         zip={PLACES[activePlace].zip}
    //         gettingWeather={this.gettingWeather}
    //     />
    // </div>


export default App;
