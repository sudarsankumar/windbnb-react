import React, { Component } from 'react'
import Footer from './Footer'
import { Hotel } from './Hotel'
import './Hotels.css'
import Data from './stays.json'
import TopBar from './TopBar'

class Hotels extends Component {
    state = {
        loc : '',
        guests : 0
    }
    handleLocationChange = input => e => {
        this.setState({
            [input] : e.target.value
        })
    }
    handleGuestsChange = input => e => {
        this.setState({
            [input] : e.target.value
        })
    }
    render() {
        const {loc,guests} = this.state
        const values = {loc, guests}
        return (
            <div>
                <TopBar 
                    handleLocationChange = {this.handleLocationChange}
                    handleGuestsChange = {this.handleGuestsChange}
                    values = {values}
                />
                <div className="container">
                    <div className="hotel-list">
                        {Data.map(post => {
                            return(
                                <Hotel values={values} city={post.city} country={post.country} img={post.photo} superHost={post.superHost} type={post.type} rating={post.rating} title={post.title} maxGuests={post.maxGuests} beds={post.beds} />
                            )
                        })}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Hotels