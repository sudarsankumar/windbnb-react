import React, { Component } from 'react'
import './TopBar.css'
import 'react-dropdown/style.css';

class TopBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            display : 'none'
        }
    }
    handleFocus = () => {
        this.setState({
            display : 'flex'
        })
    }
    closeModal = () => {
        this.setState({
            display : 'none'
        })
    }
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
                            <input type="text" value={values.loc} onFocus={this.handleFocus} className="loc" onChange={handleLocationChange('loc')} />
                            <input type="text" value={values.guests} onFocus={this.handleFocus} className="guests" onChange={handleGuestsChange('guests')} />
                            <i class="fas fa-search"></i>
                        </div>
                    </div>
                </div>
                <div className="modal" style={{display : this.state.display}}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <span onClick={this.closeModal} className="close">&times;</span>
                            <h2>Edit your Search</h2>
                        </div>
                        <div className="modal-body">
                            <select name="" id="" onChange={handleLocationChange('loc')}>
                                <option value="">Show All</option>
                                <option value="Helsinki">Helsinki, Finland</option>
                                <option value="Turku">Turku, Finland</option>
                                <option value="Oulu">Oulu, Finland</option>
                                <option value="Vaasa">Vaasa, Finland</option>
                            </select>
                            <input type="number" id="number" placeholder="Enter number of guests" onChange={handleGuestsChange('guests')}></input>
                            <div className="button-container">
                                <button onClick={this.closeModal}><i class="fas fa-search"></i> Search</button>
                            </div>
                            <div></div>
                            <div className="number-container">
                                <div className="adults">
                                    <h3 className="top-most">Adults</h3>
                                    <h3 className="bot-most">Ages 13 or above</h3>
                                    <input type="number" id="number" placeholder="Enter number of adults" />
                                </div>
                                <div className="children">
                                    <h3 className="top-most">children</h3>
                                    <h3 className="bot-most">Age 2-12</h3>
                                    <input type="number" id="number" placeholder="Enter number of children" />
                                </div>
                            </div>
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