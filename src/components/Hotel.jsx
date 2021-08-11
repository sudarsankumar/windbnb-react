import React from 'react'
import './Hotel.css'
export const Hotel = ({values, img, superHost, type, rating, title, maxGuests, beds, city, country}) => {
    console.log(values)
    if(values.guests <= maxGuests && (values.loc === city || values.loc === ''))
    {
        console.log(maxGuests)
        if(superHost === true)
        {
            return(
                <div className="hotel">
                    <img src={img} alt="" />
                    <div className="top">
                        <div className="top-first">
                            <p className="superhost">SUPERHOST</p>
                            <p className="type">{type}</p>
                        </div>
                        <div className="rate">
                            <i class="fas fa-star"></i>
                            <p className="rating">{rating}</p>
                        </div>
                    </div>
                    <p className="title">{title}</p>
                </div>
            )
        }
        else
        {
            return(
                <div className="hotel">
                    <img src={img} alt="" />
                    <div className="top">
                        <div className="top-first">
                            <p className="type">{type}</p>
                        </div>
                        <div className="rate">
                            <i class="fas fa-star"></i>
                            <p className="rating">{rating}</p>
                        </div>
                    </div>
                    <p className="title">{title}</p>
                </div>
            )
        }
    }
    else
    {
        return ''
    }
}