import React, { Component } from 'react'
import './TopBar.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const location = [
    {
        label : 'Helsinki, Finland',
        value : 'Helsinki'
    },{
        label : 'Turku, Finland',
        value : 'Turku'
    },{
        label : 'Oulu, Finland',
        value : 'Oulu'
    },{
        label : 'Vaasa, Finland',
        value : 'Vaasa'
    }
]
const defaultOption = location[0];

class TopBar extends Component {
    render() {
        const {handleLocationChange, handleGuestsChange, values} = this.props
        return (
            <div className="top-bar-container">
                <div className="top-bar">
                    <div className="logo">
                        <i class="fas fa-caret-up"></i>
                        <p className="logo-text">windbnb</p>
                    </div>
                    <div className="search-container">
                        <div className="search">
                            <select name="" id="" onChange={handleLocationChange('loc')}>
                                <option value="">Show All</option>
                                <option value="Helsinki">Helsinki, Finland</option>
                                <option value="Turku">Turku, Finland</option>
                                <option value="Oulu">Oulu, Finland</option>
                                <option value="Vaasa">Vaasa, Finland</option>
                            </select>
                            <input type="text" className="guests" onChange={handleGuestsChange('guests')} />
                            <i class="fas fa-search"></i>
                        </div>
                    </div>
                </div>
                <div className="stayss">
                    <div className="h1">Stays in Finland</div>
                    <p>12+stays</p>
                </div>
            </div>
        )
    }
}

export default TopBar