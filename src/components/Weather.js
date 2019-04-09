import React, { Component } from 'react';

class Weather extends Component {
    render() {
        return (
            <div>
                {/* conditional statements -- will only show the 'p' tags if 'true' */}
                {this.props.temperature && <p>{this.props.temperature}</p>}
                {this.props.city && this.props.country && <p>{this.props.city}, {this.props.country}</p>}
                {this.props.humidity && <p>Humidity:{this.props.humidity}</p>}
                {this.props.description && <p>Conditions:{this.props.description}</p>}
            </div>
        );
    }
}

export default Weather;