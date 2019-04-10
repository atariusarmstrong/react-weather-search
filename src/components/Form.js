import React, { Component } from 'react';

class Form extends Component {
    
    render() {
        return (
            <div>
                <form onSubmit={this.props.getWeather} className='input-group'>
                    <input type='text' name='city' placeholder='City'></input>
                    <input type='text' name='country' placeholder='Country'></input>
                    <button className='btn btn-outline-secondary'>Find Weather</button>
                </form>
            </div>
        );
    }
}

export default Form;